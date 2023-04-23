import React from "react";
import { Typography } from "@material-tailwind/react";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-3 text-center md:justify-around mt-10 text-2xl">
      <Typography color="blue-gray" className="font-semibold">
        &copy; 2023 PankajKTech
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <FaFacebook className=" transition-colors hover:text-blue-500 focus:text-blue-500" />
        </li>
        <li>
          <FaLinkedin className=" transition-colors hover:text-blue-500 focus:text-blue-500" />
        </li>
        <li>
          <FaInstagram
            color="blue-gray"
            className=" transition-colors hover:text-blue-500 focus:text-blue-500"
          />
        </li>
        <li>
          <FaTwitter
            color="blue-gray"
            className=" transition-colors hover:text-blue-500 focus:text-blue-500"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
