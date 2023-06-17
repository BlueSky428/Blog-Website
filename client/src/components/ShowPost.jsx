import React, { useState, useEffect } from "react";
import Post from "./Post";
import Loader from "./Loader";

const ShowPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://pankajktechblogapi.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  if (posts.length === 0) {
    return <Loader />;
  }

  return (
    <section className="min-h-screen w-full px-4 py-24">
      <div className="flex justify-center flex-wrap gap-10 ">
        {posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post._id} {...post} />;
          })}
      </div>
    </section>
  );
};

export default ShowPost;
