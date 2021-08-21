import React from "react";

function ImgBox({ src }) {
  return (
    <>
      <div className="col-lg-6 p-0">
        <div className="img-effect">
          <img src={src} alt="world Trip" className="img-fluid image1" />
        </div>
      </div>
    </>
  );
}

export default ImgBox;
