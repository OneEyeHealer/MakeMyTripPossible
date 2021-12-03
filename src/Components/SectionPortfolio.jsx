import React, { useState } from "react";
// import { Tours } from "../Services/TourService"k;
import TourBox from "./Common/TourBox";
import Details from "./Common/Details";
function SectionPortfolio({
  heading,
  data,
  key,
  title,
  src,
  place,
  description,
  day,
  night,
  date,
  amount,
  discount,
  rate,
  tourPlace,
  setTourPlace,
}) {
  const [tourData, setTourData] = useState({});
  const [tDays, setTDays] = useState([]);
  const [showTour, setShowTour] = useState(true);

  const rating = {
    count: 5,
    edit: false,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="fal fa-star"></i>,
    halfIcon: <i className="fad fa-star-half-alt"></i>,
    fullIcon: <i className="fa fa-star"></i>,
  };
  return (
    <>
      <section className="portfolio-flyer py-5" id="tours-details">
        <div className="container pt-lg-3 pb-md-5">
          <h3 className="tittle text-center my-3">
            {heading} {!showTour ? "Details" : ""}
          </h3>

          {showTour ? (
            <div className="row news-grids pb-lg-5">
              {data.map((tour) => (
                <TourBox
                  setTourData={setTourData}
                  setShowTour={setShowTour}
                  setTDays={setTDays}
                  tourObj={tour}
                  key={tour[key]}
                  ikey={tour[key]}
                  title={tour[title]}
                  src={tour[src]}
                  place={tour[place]}
                  description={tour[description]}
                  day={tour[day]}
                  night={tour[night]}
                  date={tour[date]}
                  amount={tour[amount]}
                  discount={tour[discount]}
                  value={tour[rate]}
                  rate={tour.rate}
                  {...rating}
                />
              ))}
            </div>
          ) : (
            <Details
              setTourData={setTourData}
              setShowTour={setShowTour}
              tourData={tourData}
              tDays={tDays}
              tourPlace={tourPlace}
              setTourPlace={setTourPlace}
            />
          )}
        </div>
      </section>
    </>
  );
}
SectionPortfolio.defaultProps = {
  key: "key",
  title: "title",
  place: "place",
  day: "day",
  night: "night",
  date: "date",
  amount: "amount",
  discount: "discount",
  description: "description",
  src: "src",
  rate: "rate",
};

export default SectionPortfolio;
