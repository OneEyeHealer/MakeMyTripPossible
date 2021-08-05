import React from "react";
import { verticalPoints } from "../../Services/VerticalService";

function VerticalListBox({ key, title, para, icon }) {
  return (
    <>
      <div className="col-lg-6 serv_bottom feature-grids pl-lg-5">
        <div className="featured-left text-left">
          {verticalPoints.map((vpoint) => (
            <div key={vpoint[key]} className="bottom-gd px-1">
              <span className={vpoint[icon]} aria-hidden="true"></span>
              <h3 className="my-4">{vpoint[title]}</h3>
              <p>{vpoint[para]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

VerticalListBox.defaultProps = {
  key: "key",
  title: "title",
  para: "para",
  icon: "icon",
};
export default VerticalListBox;
