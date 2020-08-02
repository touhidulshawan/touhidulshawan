import React, { useEffect } from "react";

import ProfileImg from "../../components/profile-image/ProfileImg";
import Bio from "../../components/bio/Bio";
import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

const Home = () => {
  //set title
  useEffect(() => {
    document.title = "Touhidul Shawan";
  });
  return (
    <Aux>
      <NavBar />
      <div className="lg:flex lg:justify-center lg:items-center container m-auto lg:mt-20">
        <div className=" flex flex-col-reverse items-center lg:items-start text-center lg:grid lg:grid-cols-3 lg:min-h-3/6 pt-20 gap-10">
          <div className="col-span-2 w-2/3 ">
            <Bio />
          </div>
          <div className="col-span-1 ">
            <div className=" w-9/12  h-9/12 md:w-3/6 md:h-3/6  m-auto lg:w-auto lg:h-auto mb-6">
              <ProfileImg />
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Home;
