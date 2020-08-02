import React from "react";

import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <a
      href="mailto:touhidulshawan@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm bg-purple-600 text-purple-100 uppercase border  border-purple-600 w-48 p-4 rounded-md shadow-inline tracking-wide flex justify-center items-center mt-3 mb-4"
    >
      <span className="text-lg mr-2">
        <GrMail />
      </span>
      Contact Me
    </a>
  );
};

export default Contact;
