import React from "react";
import img404 from "../../assets/img/404.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useTheme } from "../../context/useThemeContext";

const Page404 = () => {
  const darkMode = useTheme();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="p-4 bg-purple-500 h-64 ">
          <object
            className="m-auto h-full w-full "
            data={img404}
            type="image/svg+xml"
          >
            404 Page Image
          </object>
        </div>
        <div className="mt-4">
          <Link to="/">
            <span className=" flex justify-center items-center text-sm">
              <TiArrowBack className="text-3xl text-blue-500 mr-2" />
              <span className="hover:text-purple-700 transition ease-out duration-500 tracking-wide uppercase text-gray-500">
                Back to Home
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
