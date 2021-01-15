import React, { useEffect } from "react";

import ProfileImg from "../../components/profile-image/ProfileImg";
import Bio from "../../components/bio/Bio";
import NavBar from "../../components/navBar/navBar";

const Home = (props) => {
  //set title
  useEffect(() => {
    document.title = "Touhidul Shawan";
  });
  return (
    <main className=" bg-gradient-to-bl from-blue-300  to-pink-300 min-h-screen  overflow-hidden">
      <NavBar />
      <div className="lg:flex lg:justify-center lg:items-center container m-auto ">
        <div className=" flex flex-col-reverse items-center lg:items-start text-center lg:grid lg:grid-cols-12 lg:min-h-3/6 pt-20 gap-2">
          <div className="col-span-8 w-2/3 ">
            <Bio />
          </div>
          <div className="col-span-4">
            <div className=" w-9/12  h-9/12 md:w-3/6 md:h-3/6  m-auto lg:w-auto lg:h-auto mb-6">
              <ProfileImg />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
