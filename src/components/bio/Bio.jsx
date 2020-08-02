import React from "react";

import Contact from "../contact/Contact";

const Bio = () => {
  return (
    <div className="flex justify-start flex-col">
      <p className="tracking-wide text-left  leading-loose text-lg pb-3">
        <span className="text-3xl">Hi</span>, I am{" "}
        <span className="uppercase text-purple-600">Touhidul Shawan</span>, a
        self-taught Web Developer and a Linux lover. Currently I am a frontend
        developer but also has interest to learn backend development. I build UI
        components using modern frontend technology like{" "}
        <span className="text-purple-600">React</span>. Already, I have worked
        as freelancer in Fiverr. I have become an one-level seller in{" "}
        <span>
          <a
            href="https://www.fiverr.com/frontwebdev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-600"
          >
            Fiverr
          </a>
        </span>
        . I am looking for opportunities to work full-time as a Web Developer.
      </p>
      <Contact />
    </div>
  );
};

export default Bio;
