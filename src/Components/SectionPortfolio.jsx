import React from "react";
import { Tours } from "../Services/TourService";
import TourBox from "./Common/TourBox";
import TourHoverImgBox from "./Common/TourHoverImgBox";
function SectionPortfolio({
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
}) {
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
      <section className="portfolio-flyer py-5" id="gallery">
        <div className="container pt-lg-3 pb-md-5">
          <h3 className="tittle text-center my-lg-5 my-3">Our Recent Tours</h3>

          <div className="row news-grids pb-lg-5 mt-3 mt-lg-5">
            {Tours.map((tour) => (
              <TourBox
                key={tour[key]}
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
                {...rating}
              />
            ))}
            {/* <TourBox amount={8500} discount={20} {...rating} value={5} />
            <TourBox amount={6500} discount={20} {...rating} value={1.5} />
            <TourBox amount={7500} discount={20} {...rating} value={3.5} /> */}
          </div>
        </div>
      </section>
      <TourHoverImgBox />
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
