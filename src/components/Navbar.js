import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbarform">
        <div className="navbar">
          <NavLink to="/home" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/editProfile" activeclassname="active">
            EditProfile
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
          <NavLink to="/" activeclassname="active">
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
