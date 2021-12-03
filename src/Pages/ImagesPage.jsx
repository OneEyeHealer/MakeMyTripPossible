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
                <div key={place.key} className="col mb-4">
                  <div className="card bg-dark text-white place-box">
                    <iframe
                      width="100%"
                      height="300"
                      src={place.src}
                      title={place.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="card-img-overlay places-img onHover onMobilehide">
                      <h5 className="card-title">{place.name}</h5>
                      {/* <p className="card-text text-light">{place.para}</p> */}
                      {/* <p className="card-text">Last updated 3 mins ago</p> */}
                    </div>
                    {/* <img src={place.src} className="card-img" alt={place.alt} /> */}
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
