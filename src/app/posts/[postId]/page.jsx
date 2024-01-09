import React from "react";
import PostPage from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr></hr>
      <h1>Otras publicaciones</h1>
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <PostPage />
      </Suspense>
    </div>
  );
}
