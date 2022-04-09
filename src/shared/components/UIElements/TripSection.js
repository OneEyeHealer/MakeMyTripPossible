import React from "react";
import "./TripSection.css";
const TripSection = (props) => {
  let { description, itinerary, inclusion, exclusion } = props.trip.details[0];
  let tripKey = Object.keys(props.trip.details[0]);
  return (
    <>
      <section id={tripKey[0]}>
        <div className="container">
          <div className="tabContents">
            <h3>
              <i className="fad fa-file-alt" /> {tripKey[0]}
            </h3>
            <p />
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <p />
          </div>
        </div>
      </section>
      <section id={tripKey[1]}>
        <div className="container">
          <div className="tabContents">
            <h3>
              <i className="fad fa-file-alt" /> {tripKey[1]}
            </h3>
            <p />
            <div className="wpb_wrapper">
              {itinerary.map((data, index) => (
                <span key={props.trip.to + "-para-" + index}>
                  <p>
                    <strong>
                      {data.day} : {data.title}
                    </strong>
                  </p>
                  <ul className="trip-section-list">
                    {data.brief.map((list, i) => (
                      <li
                        key={props.trip.to + "-list-" + i}
                        dangerouslySetInnerHTML={{ __html: list }}
                      />
                    ))}
                  </ul>
                </span>
              ))}
            </div>
            <p />
          </div>
        </div>
      </section>
      <section id={tripKey[2]}>
        <div className="container">
          <div className="tabContents">
            <h3>
              <i className="fad fa-file-alt" /> {tripKey[2]}
            </h3>
            <p />
            <ul className="trip-section-list">
              {inclusion.map((list, i) => (
                <li
                  key={tripKey[2] + "-" + i}
                  dangerouslySetInnerHTML={{ __html: list }}
                />
              ))}
            </ul>
            <p />
          </div>
        </div>
      </section>
      <section id={tripKey[3]}>
        <div className="container">
          <div className="tabContents">
            <h3>
              <i className="fad fa-file-alt" /> {tripKey[3]}
            </h3>
            <p />
            <ul className="trip-section-list">
              {exclusion.map((list, i) => (
                <li
                  key={tripKey[2] + "-" + i}
                  dangerouslySetInnerHTML={{ __html: list }}
                />
              ))}
            </ul>
            <p />
          </div>
        </div>
      </section>
    </>
  );
};

export default TripSection;
