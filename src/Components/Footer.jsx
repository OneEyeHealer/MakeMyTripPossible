import React from "react";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer_1its pt-5">
          <div className="container py-md-1">
            <div className="row footer-top mb-md-5 mb-4">
              <div
                className="col-lg-4 col-md-6 footer-grid_section_1its"
                data-aos="fade-right"
              >
                <div className="footer-title-w3pvt">
                  <h3>Address</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Address : 1234 lock, Charlotte, North Carolina, United
                    States
                  </p>
                  <p>Phone : +12 534894364</p>
                  <p>
                    Email :
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                  <p>Fax : +12 534894364</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4 footer-grid_section_1its">
                <div className="footer-title-w3pvt">
                  <h3>Quick Links</h3>
                </div>
                <div className="row no-gutters">
                  <ul className="links">
                    <li>
                      <a href="index.html">Home </a>
                    </li>
                    <li>
                      <a href="about.html">About </a>
                    </li>
                    <li>
                      <a href="features.html">Services</a>
                    </li>

                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="
                        col-lg-4 col-md-12
                        mt-lg-0 mt-4
                        col-sm-12
                        footer-grid_section_1its
                    "
                data-aos="fade-left"
              >
                <div className="footer-title-w3pvt">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-text">
                  <p>
                    By subscribing to our mailing list you will always get
                    latest news and updates from us.
                  </p>
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Enter your email..."
                      required=""
                    />
                    <button className="btn1">
                      <span
                        className="fa fa-paper-plane-o"
                        aria-hidden="true"
                      ></span>
                    </button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- copyright --> */}
      <div className="cpy-right pb-1">
        <div className="container">
          <div className="row no-gutters text-center">
            <div className="col">
              <p className="copy-w3layouts">
                © 2021 MakeYourTripPossible. All rights reserved | Design by
                <a href="http://github.OneEyeHealer.io">OneEyeHealer.</a>
              </p>
              {/* </div>
            <div className="col-md-4"> */}
              <ul className="top-right-info">
                <li className="mr-1">
                  <a href="/">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li className="mx-1">
                  <a href="/">
                    <span className="fab fa-google-plus"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
