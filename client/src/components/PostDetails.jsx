import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  console.log(post.updatedAt);

  useEffect(() => {
    fetch(`https://pankajktech-blog.onrender.com/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  const { title, cover, content } = post;

  if (!post) return "";
  return (
    <article class="px-4 py-12 mx-auto max-w-7xl">
      <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div class="pb-6 mb-6 border-b border-gray-200">
          <h1
            class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            title={title}
          >
            {title}
          </h1>
          <p class="text-base text-gray-500">Create By- Pankaj Kumar</p>
        </div>
        <div class="flex items-center mb-6 space-x-2">
          <p class="text-gray-600 mr-3">Share this article</p>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <FaFacebook className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <FaTwitter className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <FaLinkedinIn className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
        </div>
        <img
          src={`http://localhost:3000/${cover}`}
          class="object-cover w-full max-h-72 bg-center rounded"
          alt="PankajKTech"
        />
      </div>

      <div
        class="w-full mx-auto prose md:w-3/4 lg:w-1/2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default PostDetails;
