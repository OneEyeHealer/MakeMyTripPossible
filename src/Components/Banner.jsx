import React from "react";

function Banner(props) {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row banner-grids">
            <div className="col-lg-12 mt-5 banner-info-w3ls">
              <h2 style={{ fontSize: "2em", marginTop: "3em" }}>
                Click Karo Trip Karo
              </h2>
              <h3 className="mb-3">
                Plan Your Holiday Trip Now Exceptional Adventure
              </h3>
              <p className="mb-4">
                {/* Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. */}
              </p>
              <a href="/home/#explore-more" className="btn">
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
