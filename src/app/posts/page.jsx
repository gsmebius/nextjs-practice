import React from "react";
import PostCard from "@/src/components/PostCard";
import './Post.css'

async function LoadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000))

  return data;
}

async function PostPage() {
  const post = await LoadPost();
  console.log(post);
  return (
    <div className='grid'>
      {post.map((post) => (
        <PostCard post={post} key={post.id}/>
      ))}
    </div>
  );
}

export default PostPage;
