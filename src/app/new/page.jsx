"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NewPage({ params }) {
  const router = new useRouter();

  // el "" es para que quede vacío cuando no hay nada
  // Los set actaulizan el estado y se mandan a llamar en el submit
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // si hay params ocupa el efecto para editar
  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

    } else {
      await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    // refresh para recargar automático 
    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="title" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-blue-700 hover:bg-blue-300 text-white 
        font-bold py-2 px-4 rounded"
        >
          Crear
        </button>
        {
          params.id && (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            type="button"
            onClick={async () => {
              await fetch(`/api/task/${params.id}`,{
                method: "DELETE",
              })
              router.push('/')
              router.refresh();
            }}>
              Delete
            </button>
          )
        }
      </form>
    </div>
  );
}
