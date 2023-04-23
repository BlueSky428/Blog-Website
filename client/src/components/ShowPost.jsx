import React, { useState, useEffect } from "react";
import Post from "./Post";
import Loader from "./Loader";

const ShowPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pankajktech-blog.onrender.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-10">
          {posts.length > 0 &&
            posts.map((post) => {
              return <Post key={post._id} {...post} />;
            })}
        </div>
      )}
    </section>
  );
};

export default ShowPost;
