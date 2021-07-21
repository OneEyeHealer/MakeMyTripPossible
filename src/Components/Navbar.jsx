import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="main-content" id="home">
        <header className="header bg-light">
          <div className="container">
            {/* <!-- nav --> */}
            <nav className="pt-1">
              <div id="logo">
                <h1>
                  <a className="navbar-brand" href="/">
                    <i className="fad fa-globe-stand" /> MMTP
                  </a>
                </h1>
              </div>

              <label htmlFor="drop" className="toggle">
                <i class="far fa-tasks" />
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li className="dropdown">
                  <label htmlFor="drop-2" className="toggle">
                    Drop Down
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <a href="/">
                    Destination
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
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
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
            {/* <!-- //nav --> */}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
