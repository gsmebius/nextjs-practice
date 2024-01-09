"use client";
import React from "react";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="bg-gray-950 p-10">
      <div>
        <Link href={`/posts/${post.id}`}>
          <h3 className="text-xl font-bold mb-4">
            {post.id}. {post.title}
          </h3>
        </Link>
        <p className="text-slate-300">{post.body}</p>
        <button
          onClick={() => {
            alert("Alertando desde NextJS");
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}
