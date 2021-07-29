import React from "react";
import { NotFoundImg } from "../Services/ImgService";
function NotFoundPage(props) {
  return (
    <>
      <div className="not-found">
        <img
          className="not-found-img"
          src={NotFoundImg}
          alt="not-found"
          width="100%"
          height="auto"
        />
      </div>
    </>
  );
}

export default NotFoundPage;
