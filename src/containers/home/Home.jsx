import React, { useEffect } from "react";
import ProfileImg from "../../components/profile-image/ProfileImg";
import Bio from "../../components/bio/Bio";
import NavBar from "../../components/navBar/navBar";
import { useTheme } from "../../context/useThemeContext";

const Home = () => {
  const darkMode = useTheme();
  //set title
  useEffect(() => {
    document.title = "Touhidul Shawan";
  });
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <NavBar />
        <div className=" flex flex-col-reverse md:max-w-5xl mx-auto md:grid md:grid-cols-2 gap-5  md:mt-8 dark:bg-gray-900">
          <Bio />
          <ProfileImg />
        </div>
      </main>
    </div>
  );
};
export default Home;
