import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { DiscountAmount } from "../../util/PriceCount";
function TourBox({
  title,
  src,
  place,
  description,
  day,
  night,
  date,
  amount,
  discount,
  ...rating
}) {
  return (
    <>
      <div className="col-lg-4 gal-img mt-lg-4">
        <div className="gal-info">
          <Link to="destination">
            <img src={src.TourImg} alt="Tour-name" className="img-fluid" />
            <span className="onsale">{discount}% off</span>
          </Link>
          <div className="property-info-list">
            <div className="float-end price-tag">
              <span className="original-amount">
                <i className="fas fa-rupee-sign" /> {amount}
              </span>

              <span className="discount-amount">
                <i className="fas fa-rupee-sign" />
                {DiscountAmount(amount, discount)}
              </span>
              {/* <span className="discount-percentage">{discount}% off</span> */}
            </div>
            <div className="detail">
              <h4 className="title">
                <a href="/">{title}</a>
                <ReactStars {...rating} />
              </h4>
              <div className="location mt-2">
                <a href="/">
                  <span className="fas fa-map-marker-alt"></span> {place}
                </a>
              </div>
              <br />
              <div className="facilities-list clearfix">
                <p>{description}</p>
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
              <span className="year text-right">
                <span className="fad fa-calendar-alt"></span> {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourBox;
