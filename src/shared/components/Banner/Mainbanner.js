import React from "react";
import SearchBanner from "./SearchBanner";
import TitleBanner from "./TitleBanner";

const MainBanner = (props) => {
  return (
    <header
      className={props.path === "/" ? "main-content" : "main-content inner"}
      id="home"
      style={props.style}
    >
      {props.path === "/" ? (
        <SearchBanner />
      ) : (
        <TitleBanner {...props} title={props.title} />
      )}
    </header>
  );
};

export default MainBanner;
