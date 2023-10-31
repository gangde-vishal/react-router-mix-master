import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink className="nav-links" to="/">
            Home
          </NavLink>
          <NavLink className="nav-links" to="/about">
            About
          </NavLink>
          <NavLink className="nav-links" to="/news-letter">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
