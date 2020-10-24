import React from "react";

import Contact from "../contact/Contact";

const Bio = () => {
  return (
    <div className="flex justify-start items-start flex-col">
      <p className="tracking-widest text-left  leading-loose text-lg pb-3">
        <span className="text-3xl">Hi</span>, I am{" "}
        <span className="font-bold uppercase text-xl">Touhidul Shawan</span>, a
        self-taught Web Developer. Currently I am a frontend developer but also
        has interest to learn backend development. I build UI components using
        modern frontend technology like React. Already, I have worked as
        freelancer in Fiverr. I have become an one-level seller in Fiverr. I am
        looking for opportunities to work full-time as a Web Developer.
      </p>

      <div className="mb-5">
        <a
          href="mailto:touhidulshawan@gmail.com"
          className=" text-xl border-b-2 border-pink-500"
        >
          touhidulshawan@gmail.com
        </a>
      </div>
      <hr />
      <Contact />
    </div>
  );
};

export default Bio;
