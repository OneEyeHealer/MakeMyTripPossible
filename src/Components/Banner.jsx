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
              <a href="/#tours-details" className="btn">
                Explore Now
              </a>
            </div>
          </div>
        </div>
        {/* <div className="container mt-3 text-center">
          <iframe
            width="200px"
            height="300px"
            src="https://www.youtube.com/embed/v9bbNq8mNgc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
      </section>
    </>
  );
}

export default Banner;
