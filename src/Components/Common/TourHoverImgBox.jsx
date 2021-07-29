import React from "react";

function TourHoverImgBox(props) {
  return (
    <>
      <div id="gal1" className="pop-overlay animate">
        <div className="popup">
          <img
            src="https://www.momkidcare.com/img/contact/Contact-Us.png"
            alt="Tour"
            className="img-fluid"
          />

          <a className="close" href="#gallery">
            &times;
          </a>
        </div>
      </div>
    </>
  );
}

export default TourHoverImgBox;
