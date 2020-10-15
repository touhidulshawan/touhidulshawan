import React, { useEffect } from "react";
import NavBar from "../../components/navBar/navBar";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  const currentThemeMode = window.localStorage.getItem("theme");

  useEffect(() => {
    document.title = "Contact";
  });

  return (
    <>
      <NavBar theme={props.theme} toggleTheme={props.themeToggler} />
      <section className="container m-auto mt-20 my-5 py-5  w-9/12 md:w-2/4">
        <h1 className="text-2xl  text-orange-600 tracking-widest uppercase mb-8 text-center border-b-2 pb-5">
          Contact With Me
        </h1>
        <ContactForm theme={currentThemeMode} />
      </section>
    </>
  );
};

export default Contact;
