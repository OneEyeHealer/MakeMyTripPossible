import React from "react";
import { facbook, insagram, linkedin, twitter } from "../Services/ImgService";

function Footer(props) {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default Footer;
