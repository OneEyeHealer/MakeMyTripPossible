import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ logo }) => {
  return (
    <>
      <div id="logo">
        <h1>
          <Link className="navbar-brand logo-name" to="/">
            <img
              id="loading"
              src={logo}
              alt="MakeYourTripPossible-logo"
              width="40px"
              height="auto"
            />
            <span className="logo-name">
              <span className="logo-color">Make</span>
              <span>Your</span>
              <span className="logo-color">Trip</span>
              <span>Possible</span>
            </span>
          </Link>
        </h1>
      </div>
      <label htmlFor="drop" className="toggle">
        <i className="far fa-tasks" />
      </label>
      <input type="checkbox" id="drop" />
      <ul className="menu mt-2 border-radius-class">
        <li className="active">
          <Link to="/">&nbsp;Home</Link>
        </li>
        <li>
          <Link to="/">&nbsp;Parent Trip</Link>
        </li>
        <li>
          <Link to="/">&nbsp;International</Link>
        </li>
        <li>
          <Link to="/">&nbsp;Blogs</Link>
        </li>
        <li className="dropdown">
          <label htmlFor="drop-2" className="toggle text-light">
            Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true"></span>
          </label>
          <Link to="/">
            Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true"></span>
          </Link>
          <input type="checkbox" id="drop-2" />
          {/* Awaited Trips lists */}
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
