import React from "react";
import VerticalBlock from "./VerticalBlock";
import { worldTrip } from "../Services/ImgService";

function SectionAbout(props) {
  return (
    <>
      <section className="about" id="explore-more">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">About Us</h3>
            <VerticalBlock src={worldTrip} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionAbout;
