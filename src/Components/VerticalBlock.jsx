import React from "react";
import ImgBox from "./Common/ImgBox";
import VerticalListBox from "./Common/VerticalListBox";

function VerticalBlock({ data, src, ...rest }) {
  return (
    <>
      <div className="fetured-info pt-lg-5">
        <div className="row fetured-sec mt-lg-5 mt-3">
          {/* right side  */}
          <ImgBox src={src} />
          {/* left side */}
          <VerticalListBox data={data} />
        </div>
      </div>
    </>
  );
}

export default VerticalBlock;
