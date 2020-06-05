import React from "react";
import "./Bio.scss";

const Bio = () => {
  return (
    <p className="bio__text">
      I am a self-taught Web Developer, Programmer and a Linux lover. Currently
      I am a frontend developer but also learning backend development. I build
      UI components with React. Already, I haved worked as freelancer in Fiverr.
      I have become an one-level seller in{" "}
      <span>
        <a
          href="https://www.fiverr.com/frontwebdev"
          target="_blank"
          rel="noreferrer noopener"
          className="fiverr-text"
        >
          Fiverr
        </a>
      </span>
      . I am looking for opportunities to work as a Web Developer.
    </p>
  );
};

export default Bio;
