import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Loader from "./Loader";
import { motion } from "framer-motion";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pankajktechblogapi.vercel.app/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  const { title, content, img, createdAt } = post;

  if (Object.keys(post).length === 0) {
    return <Loader />;
  }

  return (
    <article className="px-4 py-12 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2"
      >
        <div className="pb-6 mb-6 border-b border-gray-200">
          <h1
            className="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            title={title}
          >
            {title}
          </h1>
          <span className="text-base text-gray-500 mr-2">
            Create By- Pankaj Kumar
          </span>
          <span className="text-base text-gray-500 ml-2">
            Posted On- {new Date(createdAt).toDateString()}
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-2">
          <p className="text-gray-600 mr-3">Share this article</p>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebook className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaLinkedinIn className="mx-1 text-xl text-blue-500 hover:text-indigo-700" />
          </a>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          src={img}
          className="object-cover w-full max-h-72 bg-center rounded"
          alt="PankajKTech"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full mx-auto prose md:w-3/4 lg:w-1/2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default PostDetails;
