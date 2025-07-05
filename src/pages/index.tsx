import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="justify-items-center px-4 h-screen grid items-center">
      <div className="bg-neutral-900 rounded-2xl flex flex-col items-center px-12 py-10 w-96 min-h-96 ">
        <Image
          className="rounded-full mt-10"
          src="/avatar-jessica.jpeg"
          alt="jessica"
          width={100}
          height={100}
        ></Image>
        <div className="mt-4 text-2xl font-sans ">Jessica Randall</div>
        <div className="text-sm font-semibold mt-2 text-lime-300">
          London, United Kingdom
        </div>
        <div className="mt-6 text-sm font-extralight">
          "Front-end developer and avid reader"
        </div>
        <div className="grid grid-rows-5 gap-4 w-full font-sans text-sm font-bold   mt-6">
          <button className="bg-neutral-800 hover:text-black hover:bg-lime-400 h-12  rounded-lg w-72">
            GitHub
          </button>
          <button className="bg-neutral-800  h-12 hover:text-black hover:bg-lime-400  rounded-lg">
            FrontendMentor
          </button>
          <button className="bg-neutral-800  h-12 hover:text-black hover:bg-lime-400  rounded-lg ">
            LinkedIn
          </button>
          <button className="bg-neutral-800  h-12 hover:text-black hover:bg-lime-400  rounded-lg ">
            Twitter
          </button>
          <button className="bg-neutral-800  h-12 hover:text-black hover:bg-lime-400  rounded-lg ">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
