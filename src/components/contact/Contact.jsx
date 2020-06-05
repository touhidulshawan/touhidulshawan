import React from "react";
import "./Contact.scss";

import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = (props) => {
  return (
    <div className="contact">
      <a
        href="https://github.com/touhidulShawan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:touhidulshawan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrMail />
      </a>
    </div>
  );
};

export default Contact;
