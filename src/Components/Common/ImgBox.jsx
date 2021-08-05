import React from "react";
import { worldTrip } from "../../Services/ImgService";

function ImgBox(props) {
  return (
    <>
      <div className="col-lg-6 p-0">
        <div className="img-effect">
          <img src={worldTrip} alt="world Trip" className="img-fluid image1" />
        </div>
      </div>
    </>
  );
}

export default ImgBox;
