import React from "react";
import ImgBox from "../Components/Common/ImgBox";
import VerticalListBox from "../Components/Common/VerticalListBox";
import HorizontalBlock from "../Components/HorizontalBlock";

function AboutPage(props) {
  return (
    <>
      <section class="about mt-3">
        <div class="container">
          <div class="inner-sec-w3pvt">
            <h3 class="tittle text-center px-lg-5">About Us</h3>
            <div className="fetured-info pt-lg-3">
              <div className="row fetured-sec mt-lg-5 mt-3">
                {/* right side  */}
                <VerticalListBox />
                {/* left side */}
                <ImgBox />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about mt-5">
        <div class="container">
          <div class="inner-sec-w3pvt">
            <h3 class="tittle text-center px-lg-5">Feature we Provide</h3>
            <HorizontalBlock />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
