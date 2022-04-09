import React from "react";
import DisplayIcon from "../../shared/components/UIElements/DisplayIcon";
import "./TripIcon.css";
const TripIcon = ({ trip }) => {
  let { night, day, price, start, end } = trip;
  return (
    <div className="trip-brief-section">
      <div className="row">
        <DisplayIcon
          Duration
          className=" col-4 col-md-3 col-lg-4"
          title="Duration"
          night={night}
          day={day}
        />
        <DisplayIcon
          StartingPrice
          className=" col-4 col-md-3 col-lg-4"
          title="Starting Price"
          price={price}
        />
        <DisplayIcon
          PickUp
          className=" col-4 col-md-3 col-lg-4"
          title="Pick-up and Drop"
          start={start}
          end={end}
        />
      </div>
    </div>
  );
};

export default TripIcon;
