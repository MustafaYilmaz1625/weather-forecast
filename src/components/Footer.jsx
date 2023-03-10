import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white bg-gray-400 mb-20 w-60 sm:w-72 h-16 flex justify-around items-center border-x-2 border-b-2 rounded-b-lg ">
        <a
          href="https://www.linkedin.com/in/mustafa-y%C4%B1lmaz-4b196023a/"
          className="rounded-3xl bg-blue-600 hover:bg-blue-800 p-2"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/MustafaYilmaz1625"
          className="rounded-3xl bg-gray-700 hover:bg-gray-600 p-2"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?hl=tr&tf=cm&fs=1&to=myyilmaz1625@gmail.com"
          className="rounded-3xl bg-zinc-500 hover:bg-gray-600 p-2"
        >
          <HiOutlineMail size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
