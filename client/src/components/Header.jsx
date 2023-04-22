import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, setUser } = useContext(UserContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUser(userInfo);
      });
    });
  }, []);

  const Logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const email = user?.email;

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-around text-blue-gray-900">
        <Link to={"/"}>
          <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-medium">
            PankajKTech
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          {email && (
            <>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to={"/create"}>
                  <span>Create Post</span>
                </Link>
              </Button>

              <Button
                variant="gradient"
                size="sm"
                color="red"
                className="hidden lg:inline-block"
                onClick={Logout}
              >
                <span>Logout</span>
              </Button>
            </>
          )}
          {!email && (
            <>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to={"/login"}>
                  <span>SignIn</span>
                </Link>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                color="green"
                className="hidden lg:inline-block"
              >
                <Link to={"/register"}>
                  <span>Register</span>
                </Link>
              </Button>
            </>
          )}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav}>
        {email && (
          <>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to={"/login"}>
                <span>Create Post</span>
              </Link>
            </Button>
            <Button
              variant="gradient"
              color="red"
              size="sm"
              fullWidth
              className="mb-2"
            >
              <Link to={"/register"}>
                <span>Logout</span>
              </Link>
            </Button>
          </>
        )}
        {!email && (
          <>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to={"/login"}>
                <span>Login</span>
              </Link>
            </Button>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to={"/register"}>
                <span>Register</span>
              </Link>
            </Button>
          </>
        )}
      </MobileNav>
    </Navbar>
  );
};

export default Header;
