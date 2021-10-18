import React from "react";
import ReactStars from "react-rating-stars-component";
import { DiscountAmount } from "../../util/PriceCount";
function TourBox({
  setTourData,
  setShowTour,
  setTDays,
  tourObj,
  ikey,
  title,
  src,
  place,
  description,
  day,
  night,
  date,
  amount,
  discount,
  overview,
  rate,
  ...rating
}) {
  const handleTour = (tourId) => {
    setTourData(tourId === tourObj.key ? tourObj : {});
    setTDays(tourId === tourObj.key ? tourObj.days : []);
    setShowTour(false);
  };
  return (
    <>
      <div className="col-lg-4 gal-img mt-lg-4">
        <span className="onsale">{discount}% off</span>
        <div className="gal-info">
          {/* <Link to="destination"> */}
          <img src={src} alt="Tour-name" className="img-fluid" />
          {/* </Link> */}
          <div className="property-info-list">
            <div className="float-end price-tag">
              <span className="original-amount">
                <i className="fas fa-rupee-sign" /> {amount}
              </span>

              <span className="discount-amount">
                <i className="fas fa-rupee-sign" />
                &nbsp;
                {DiscountAmount(amount, discount)}
              </span>
              {/* <span className="discount-percentage">{discount}% off</span> */}
            </div>
            <div className="detail">
              <h4 className="title">
                <a href="/">{title}</a>
                <ReactStars {...rating} />
                <span className="rating">{rate}</span>
              </h4>
              <div className="location mt-2">
                {/* <a href="/">
                  <span className="fad fa-compass"></span> {place}
                </a> */}
                {place.map((tags, i) => (
                  <span key={i} style={{ color: "#ccc" }}>
                    {" "}
                    <i className="far fa-hashtag"></i>
                    {tags}
                  </span>
                ))}
              </div>
              {/* <br />
              <div className="facilities-list clearfix">
                <p className="text-light">{description}</p>
              </div> */}
              <div className="text-center banner-info-w3ls">
                <span className="btn" onClick={() => handleTour(ikey)}>
                  Know more
                </span>
              </div>
            </div>
            <div className="footer-properties">
              <a className="admin" href="/">
                <span>
                  <i className="fal fa-sun"></i> {day} days
                </span>
                <span>
                  <i className="fal fa-moon"></i> {night} nights
                </span>
              </a>
              {/* <span className="year text-right">
                <span className="fad fa-calendar-alt"></span> {date}
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourBox;
