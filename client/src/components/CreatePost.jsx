import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Constants/Constant ";
import { Navigate } from "react-router-dom";
import { Input, Textarea, Button } from "@material-tailwind/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const CreatePost = async (e) => {
    const formData = new FormData();
    formData.set("title", title);
    formData.set("summary", summary);
    formData.set("content", content);
    formData.append("file", files[0]);

    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // Handle success case here
        console.log("Server responded with status: " + response.status);
        setRedirect(true);
      } else {
        // Handle error case here
        console.error("Server responded with status: " + response.status);
      }
    } catch (error) {
      // Handle error case here
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form
      encType="multipart/form-data"
      className="flex flex-col m-5 items-center min-h-screen"
      onSubmit={CreatePost}
    >
      <div className="w-full md:w-1/2 my-4 px-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full md:w-1/2 my-4 px-4"
      >
        <Textarea label="Summary" />
      </div>
      <div className="w-full px-4 md:w-1/2">
        <div className="mb-12">
          <input
            type="file"
            onChange={(e) => setFiles(e.target.files)}
            className="focus:border-primary active:border-primary file:border-form-stroke file:text-body-color file:hover:bg-primary w-full cursor-pointer rounded-lg border-[1.5px] font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:bg-blue-400 file:py-3 file:px-5 file:hover:bg-opacity-10"
          />
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2">
        <div className="mb-12">
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
      <Button type="submit" className="w-full md:w-1/2">
        Create Post
      </Button>
    </form>
  );
};

export default CreatePost;
