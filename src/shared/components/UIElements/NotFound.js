import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="container notFound-space">
        <div className="container return-home-btn">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "rgb(239, 150, 50)",
              color: "rgb(255, 255, 255)",
            }}
          >
            <Link
              to="/"
              style={{
                color: "rgb(255, 255, 255)",
              }}
            >
              {" "}
              Return Home
            </Link>
          </button>
        </div>
        <img src="/img/MakeYourTripPossible_not_found_banner.png" alt="" />
      </div>
    </>
  );
};

export default NotFound;
