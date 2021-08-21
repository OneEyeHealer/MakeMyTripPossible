import React from "react";
import ImgBox from "../Components/Common/ImgBox";
import VerticalListBox from "../Components/Common/VerticalListBox";
import HorizontalBlock from "../Components/HorizontalBlock";
import { AboutFeature } from "../Services/AboutService";
import { worldTrip } from "../Services/ImgService";
import { verticalPoints } from "../Services/VerticalService";

function AboutPage(props) {
  return (
    <>
      <section className="about mt-3">
        <div className="container">
          <div className="inner-sec-w3pvt">
            <h3 className="tittle text-center px-lg-5">About Us</h3>
            <div className="fetured-info pt-lg-3">
              <div className="row fetured-sec mt-lg-5 mt-3">
                {/* right side  */}
                <VerticalListBox data={verticalPoints} />
                {/* left side */}
                <ImgBox src={worldTrip} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about mt-5">
        <div className="container">
          <div className="inner-sec-w3pvt">
            <h3 className="tittle text-center px-lg-5">Feature we Provide</h3>
            <HorizontalBlock data={AboutFeature} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
