import React from "react";
import "./TitleBanner.css";

const TitleBanner = (props) => {
  const Style = props.DetailTrip
    ? {
        textAlign: "left",
        paddingLeft: "46px",
        paddingTop: "197px",
      }
    : {};
  return (
    <div className="innerBannerImg">
      <h2 style={Style}>{props.title}</h2>
      {props.DetailTrip && (
        <div className="Gitbtn">
          <a href="/enquiry-page">
            <button className="btn ccGegr">Trip Itineray</button>
          </a>
          <a href="/enquiry-page">
            <button className="btn ccGegr">Book Now</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default TitleBanner;
