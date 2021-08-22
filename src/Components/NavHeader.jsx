import React from "react";
import logo from "../Images/MYTP_LOGO2.png";
import { Link } from "react-router-dom";
import {
  about,
  bus,
  contact,
  destination,
  envelope,
  facbook,
  flight,
  home,
  hotel,
  insagram,
  linkedin,
  phone,
  popular,
  twitter,
} from "../Services/ImgService";
import { ContactInfo } from "../Services/ContactService";

function NavHeader({ pathname }) {
  return (
    <>
      <header className="header bg-light">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <ul className="top-right-info">
              <li className="mr-1">
                <a href={`tel:${ContactInfo.PhoneOne}`} className="text-dark">
                  <i className={phone}></i>&nbsp;{ContactInfo.PhoneOne}
                </a>
              </li>
              <li className="mobile-view">
                <a href={`mailto:${ContactInfo.EmailId}`} className="text-dark">
                  <i className={envelope}></i>&nbsp;{ContactInfo.EmailId}
                </a>
              </li>
            </ul>
            <div className="d-flex mobile-view">
              <ul className="top-right-info d-inline">
                <li className="mr-1">
                  <a href={facbook} target="_blank" rel="noreferrer">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li className="mx-1">
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href={insagram} target="_blank" rel="noreferrer">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <nav className="pt-1">
            <div id="logo">
              <h1>
                <Link className="navbar-brand logo-name" href="/">
                  <img src={logo} alt="MYTP-logo" width="40px" height="auto" />
                  <span className="logo-name">
                    <span className="logo-color">Make</span>Your
                    <span className="logo-color">Trip</span>Possible
                  </span>
                </Link>
              </h1>
            </div>

            <label htmlFor="drop" className="toggle">
              <i className="far fa-tasks" />
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2">
              <li className="active">
                <Link to="/home">
                  <i className={home}></i>&nbsp;Home
                </Link>
              </li>
              <li>
                <Link to="/about-us">
                  <i className={about}></i>&nbsp;About
                </Link>
              </li>
              <li>
                <Link to="/service/bus">
                  <i className={bus}></i>&nbsp;Bus
                </Link>
              </li>
              <li>
                <Link to="/service/hotel">
                  <i className={hotel}></i>&nbsp;Hotel
                </Link>
              </li>
              <li>
                <Link to="/service/flight">
                  <i className={flight}></i>&nbsp;Flight
                </Link>
              </li>
              <li className="dropdown">
                <label htmlFor="drop-2" className="toggle text-light">
                  <i className={destination}></i>&nbsp;Destination&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true"></span>
                </label>
                <Link to={pathname}>
                  <i className={destination}></i>&nbsp;Destination&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true"></span>
                </Link>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li>
                    <Link to="/destination/popular-places">
                      <i className={popular}></i>&nbsp;Popular places
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination/nature-places">
                      <i className="fad fa-trees"></i>&nbsp;Nature places
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination/spritual-places">
                      <i className="fad fa-gopuram"></i>&nbsp;Spritual places
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination/cultural-places">
                      <i className="fad fa-praying-hands"></i>&nbsp;Cultural
                      places
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us">
                  <i className={contact}></i>&nbsp;Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container-fluid border-line"></div>
    </>
  );
}

export default NavHeader;
