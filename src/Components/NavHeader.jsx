import React from "react";
import logo from "../Images/MYTP_LOGO.png";
import { Link } from "react-router-dom";

function NavHeader(props) {
  return (
    <>
      <header className="header bg-light">
        <div className="container">
          <nav className="pt-1">
            <div id="logo">
              <h1>
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="MYTP-logo" width="40px" height="auto" />{" "}
                  MYTP
                </a>
              </h1>
            </div>

            <label htmlFor="drop" className="toggle">
              <i className="far fa-tasks" />
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2">
              <li className="active">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li className="dropdown">
                <label htmlFor="drop-2" className="toggle">
                  Drop Down
                  <span className="fa fa-angle-down" aria-hidden="true"></span>
                </label>
                <a href="/">
                  Destination
                  <span className="fa fa-angle-down" aria-hidden="true"></span>
                </a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li>
                    <a href="/">Features</a>
                  </li>
                  <li>
                    <a href="/">Gallery</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavHeader;
