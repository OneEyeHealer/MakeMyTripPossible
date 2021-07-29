import React from "react";
import HorizontalBlock from "./HorizontalBlock";
import VerticalBlock from "./VerticalBlock";

function SectionAbout(props) {
  return (
    <>
      <section className="about py-lg-5 py-md-5 py-5">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">
              Explore The World With Us.
            </h3>
            <HorizontalBlock />
            <VerticalBlock />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionAbout;
