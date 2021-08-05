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
        {/* <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd px-3">
            <span className="fa fa-bus" aria-hidden="true"></span>
            <h3 className="my-4">Sit Amet Mattis</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd2-active px-3">
            <span className="fa fa-car" aria-hidden="true"></span>
            <h3 className="my-4">Ultricies Velit</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd px-3">
            <span className="fa fa-rocket" aria-hidden="true"></span>
            <h3 className="my-4">Amet Mattis Quam</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div> */}
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
