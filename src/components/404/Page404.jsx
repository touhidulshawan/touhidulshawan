import React from "react";
import "./Page404.scss";
import img404 from "../../assets/img/404.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

function Page404() {
  return (
    <section className="error-section">
      <div className="fImg_container">
        <object data={img404} type="image/svg+xml">
          404 Page Image
        </object>
      </div>
      <Link to="/">
        <TiArrowBack /> Back to Home
      </Link>
    </section>
  );
}

export default Page404;
