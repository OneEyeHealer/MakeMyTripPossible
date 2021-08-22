import React from "react";

const ImagesPage = ({ data, title }) => {
  return (
    <>
      <section className="about mt-3">
        <div className="container">
          <div className="inner-sec-w3pvt">
            <h3 className="tittle text-center px-lg-5 my-5">{title}</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 mb-4">
              {data.map((place) => (
                <div className="col mb-4">
                  <div className="card bg-dark text-white place-box">
                    <img src={place.src} className="card-img" alt={place.alt} />
                    <div className="card-img-overlay places-img">
                      <h5 className="card-title">{place.name}</h5>
                      <p className="card-text text-light">{place.para}</p>
                      {/* <p className="card-text">Last updated 3 mins ago</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImagesPage;
