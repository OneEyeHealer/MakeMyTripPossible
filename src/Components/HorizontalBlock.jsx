import React from "react";
import { horizontalPoints } from "../Services/HorizontalService";

function HorizontalBlock({ key, title, para, icon }) {
  return (
    <>
      <div className="feature-grids row mt-3 mb-lg-5 mb-3 mt-lg-5 text-center">
        {horizontalPoints.map((hpoint) => (
          <div key={hpoint[key]} className="col-lg-3" data-aos="fade-up">
            <div className="bottom-gd px-3">
              <span className={hpoint[icon]} aria-hidden="true"></span>
              <h3 className="my-4">{hpoint[title]}</h3>
              <p>{hpoint[para]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
HorizontalBlock.defaultProps = {
  key: "key",
  title: "title",
  icon: "icon",
  para: "para",
};
export default HorizontalBlock;
