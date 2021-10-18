import React from "react";
import {
  bus,
  car,
  close,
  flight,
  group,
  hotel,
} from "../../Services/ImgService";
import Article from "./Article";

function Details({ setTourData, setShowTour, tourData, tDays, title }) {
  return (
    <>
      {Object.keys(tourData).length > 0 ? (
        <div className="container m-auto pt-3 tour-full-details">
          <span
            role="button"
            className="float-end close-btn"
            onClick={() => {
              setTourData({});
              setShowTour(true);
            }}
          >
            <i className={close}></i>
          </span>
          {/* <hr /> */}
          <h3 className="tittle text-center mt-3">{tourData.title}</h3>
          <div className="container">
            <h2 className="overview py-2 px-3">
              {" "}
              <i className="fad fa-thumbtack" /> Overview
            </h2>
            <pre>{tourData.overview}</pre>
            <div className="text-center banner-info-w3ls">
              <span className="btn">Book Now</span>
            </div>
            <div className="overview-icons">
              <span title="bus">
                <i className={bus}></i>
              </span>
              <span title="car">
                <i className={car}></i>
              </span>
              <span title="hotel">
                <i className={hotel}></i>
              </span>
              <span title="flight">
                <i className={flight}></i>
              </span>
              <span title="groups">
                <i className={group}></i>
              </span>
            </div>
          </div>
          <Article />
          {tDays.map((data) => (
            <Article
              key={data.key}
              day={data.day}
              title={data.title}
              brief={data.brief}
            />
          ))}
          <hr />
          <div className="thanks-giving">
            <p>Thanks and Regards </p>
            <p>Team makeyourtrippossible</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Details;
