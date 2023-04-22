import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserContextProvider } from "../src/UserContext/UserContext";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
