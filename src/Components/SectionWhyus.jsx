import React from "react";
import { horizontalPoints } from "../Services/HorizontalService";
import HorizontalBlock from "./HorizontalBlock";

const SectionWhyus = (props) => {
  return (
    <>
      <section className="about" id="Why-us">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">Why Us</h3>
            <HorizontalBlock data={horizontalPoints} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWhyus;
