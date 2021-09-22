import React from "react";

import Navbar from "./NavBar";

import "./header.css";

import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
