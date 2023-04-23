import React from "react";
import format from "date-fns/format";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <Link to={`/post/${_id}`} className="relative block group">
          <div
            className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>
          <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={`http://localhost:3000/${cover}`}
              width="540"
              height="303"
              alt="Blog post"
            />
          </figure>
        </Link>
        <div>
          <header>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                to={`/post/${_id}`}
                className="hover:text-teal-800 transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            </h3>
          </header>
          <p className="text-lg text-gray-700 flex-grow">{summary}</p>
          <footer className="flex items-center mt-4">
            {/* <a href="#0">
              <img
                className="rounded-full flex-shrink-0 mr-4"
                src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                width="40"
                height="40"
                alt="Author 04"
              />
            </a> */}
            <div>
              <a
                className="font-medium text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out"
                href="#0"
              >
                Pankaj Kumar
              </a>
              <span className="text-gray-700"> - </span>
              <span className="text-gray-500">
                {format(new Date(createdAt), "MMMM dd, yyyy")}
              </span>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default Post;
