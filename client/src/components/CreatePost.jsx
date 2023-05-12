import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Constants/Constant ";
import { Navigate } from "react-router-dom";
import { Input, Textarea, Button, Card } from "@material-tailwind/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [redirect, setRedirect] = useState(false);

  const CreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://pankajktech-blog.onrender.com/post",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            summary,
            content,
            img,
          }),
        }
      );
      if (response.ok) {
        console.log("Server responded with status: " + response.status);
        setRedirect(true);
      } else {
        console.error("Server responded with status: " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Card className="flex flex-col w-full md:w-1/2 items-center p-5">
        <h1 className="text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl">
          Create Post
        </h1>
        <form encType="multipart/form-data" onSubmit={CreatePost}>
          <div className="w-full my-4 ">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full my-4 ">
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              label="Summary"
              maxLength={200}
            />
          </div>
          <div className="w-full my-5 ">
            <Input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              label="Enter The Image URL"
            />
          </div>
          <div className="w-full ">
            <div className="mb-12">
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
              />
            </div>
          </div>
          <Button type="submit" fullWidth>
            Create Post
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreatePost;
