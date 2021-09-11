import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="content">
          <h2>Web services provider</h2>
          <p>We develop innovative and creative products and services that provide total communication and information solutions</p>
          <Link to="/users" className="btn">Our Work</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
