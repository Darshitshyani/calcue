import React from "react";
import "./navbar.scss";
import C1 from "./images/calcue-logo.png";

const Navbar = () => {
  return (
    <>
      <div className=" absulates "></div>
      <div className="nav-body">
        <div className="img_div">
          <img src={C1} />{" "}
        </div>
        <div className="right_nav_div">
          <div className="nav-links">


          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item login">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item get-access">
          <a className="nav-link" href="#">Get Access</a>
        </li>
      </ul>
    </div>
  </div>
</nav>




            {/* <a>Home</a>
            <a>About Us</a>
            <a>Blog </a>
            <a>Careers </a>
            <a>Support</a>
            <a>Contact Us</a> */}
          </div>
          <div className="btn_div ">
            <button className="lg-btn">Login</button>
            <button className="access-btn">Get Access</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
