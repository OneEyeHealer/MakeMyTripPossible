import React from "react";
import About from "./About";
import ImgBox from "./Common/ImgBox";

function VerticalBlock({ data, src, ...rest }) {
  return (
    <>
      <div className="fetured-info">
        <div className="row fetured-sec mt-lg-5 mt-3">
          {/* right side  */}
          <ImgBox src={src} />
          {/* left side */}
          {/* <VerticalListBox data={data} /> */}
          <About />
        </div>
      </div>
    </>
  );
}

export default VerticalBlock;
