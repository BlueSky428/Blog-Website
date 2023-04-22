import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex justify-center items-center min-h-screen"
    >
      <Typography variant="h4" color="blue-gray">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={Register}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <Input
            type="password"
            size="lg"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account?
          <Link
            to="/login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Register;
