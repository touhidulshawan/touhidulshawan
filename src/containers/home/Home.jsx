import React, { useEffect } from "react";

import ProfileImg from "../../components/profile-image/ProfileImg";
import Bio from "../../components/bio/Bio";
import NavBar from "../../components/navBar/navBar";

const Home = () => {
  //set title
  useEffect(() => {
    document.title = "Touhidul Shawan";
  });
  return (
    <main className="">
      <NavBar />
      <div className=" flex flex-col-reverse md:max-w-5xl mx-auto md:grid md:grid-cols-2 gap-5  md:mt-8">
        <Bio />
        <ProfileImg />
      </div>
    </main>
  );
};
export default Home;
