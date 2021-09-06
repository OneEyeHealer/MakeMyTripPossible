import React from "react";
import HorizontalBlock from "./HorizontalBlock";
import VerticalBlock from "./VerticalBlock";
import { horizontalPoints } from "../Services/HorizontalService";
import { worldTrip } from "../Services/ImgService";
import { verticalPoints } from "../Services/VerticalService";

function SectionAbout(props) {
  return (
    <>
      <section className="about py-lg-5 py-md-5 py-5" id="explore-more">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">Why Us</h3>
            <HorizontalBlock data={horizontalPoints} />
            <VerticalBlock src={worldTrip} data={verticalPoints} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionAbout;
