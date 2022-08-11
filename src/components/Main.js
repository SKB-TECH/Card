import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Main = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-gray-900 p-5">
      <h1 className="text-center text-white font-bold">SKB-TECH</h1>
      <span className="text-center text-amber-500">Frontend Developer</span>
      <span className="text-center text-white text-sm">laurasmith.website</span>
      <div className="flex">
        <button className="text-gray-700 m-2 text-sm border rounded bg-white flex items-center gap-1 p-2 w-1/2">
          <span>
            <MdEmail className="top-2" />
          </span>
          Email
        </button>
        <button className="bg-blue-500 m-2 text-sm border-1 rounded text-white flex items-center gap-1 p-2 w-1/2">
          <BsLinkedin />
          <span>LinkedIn</span>
        </button>
      </div>
      <div className="flex flex-col justify-between m-1">
        <h4 className="text-white font-bold text-xs">About</h4>
        <div className="w-max-content text-xs text-gray-400">
          I am a frontend developer with a <br />
          particular interest in making things <br />
          simple and automating daily tasks.
          <br /> I try to keep up with security
          <br /> and best practices, and am <br />
          always looking for new things to learn.
        </div>
      </div>
      <div className="flex flex-col justify-between m-1">
        <h4 className="text-white font-bold text-xs">Interests</h4>
        <div className="w-max-content text-xs text-gray-400">
          Food expert. Music scholar.
          <br /> Reader. Internet fanatic. Bacon buff. <br />
          Entrepreneur. Travel geek. Pop <br />
          culture ninja. Coffee fanatic.
        </div>
      </div>
    </div>
  );
};

export default Main;
