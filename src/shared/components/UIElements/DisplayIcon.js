import React from "react";

const DisplayIcon = (props) => {
  return (
    <div className={props.className}>
      <div className="trip-brief-time">
        {props.Duration && <i className="fad fa-clock" />}
        {props.StartingPrice && <i className="fad fa-rupee-sign" />}
        {props.PickUp && <i className="fad fa-map-marker-alt" />}
        <p className="trip-duration">{props.title}</p>
        {props.Duration && (
          <p className="trip-data">
            {props.night} Nights {props.day} Days
          </p>
        )}
        {props.StartingPrice && <p className="trip-data">{props.price}/-</p>}
        {props.PickUp && (
          <p className="trip-data">
            {props.start} to {props.end}
          </p>
        )}
      </div>
    </div>
  );
};

export default DisplayIcon;
