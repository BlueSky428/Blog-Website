import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  const LoginFunction = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://blog-website-topaz.vercel.app/login",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
          setRedirect(true);
        });
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex justify-center items-center md:h-[78vh]"
    >
      <Card
        color="transparent"
        shadow={true}
        className="p-10 fleex justify-center items-center bg-blue-50"
      >
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={LoginFunction}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              label="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Dont have an account?
            <Link
              to="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Register
            </Link>
          </Typography>
        </form>
      </Card>
    </motion.div>
  );
};

export default Login;
