import React, { useState } from "react";
import ImagesPage from "../Pages/ImagesPage";
import {
  culturalData,
  natureData,
  popularData,
  spritualData,
} from "../Services/DestinationService";

const SectionGallery = (props) => {
  const [name, setName] = useState("");
  const [item, setItem] = useState(popularData);
  const [ikey, setIkey] = useState("");
  const gallery = [
    { title: "Popular", data: popularData },
    { title: "Nature", data: natureData },
    { title: "Spritual", data: spritualData },
    { title: "Cultural", data: culturalData },
  ];
  return (
    <>
      <section className="about" id="explore-more-3">
        <div className="container">
          <div className="inner-sec-w3pvt py-lg-5 py-3">
            <h3 className="tittle text-center mb-lg-5 mb-3 px-lg-5">Gallery</h3>
            <div className="text-center">
              {gallery.map((x) => (
                <span
                  key={x.title}
                  className={
                    x.title === ikey
                      ? "btn d-inline-block m-2 btn-primary align-gallery-acitve"
                      : "d-inline-block m-2 align-gallery"
                  }
                  onClick={() => {
                    setName(x.title);
                    setItem(x.data);
                    setIkey(x.title);
                  }}
                >
                  {x.title}
                </span>
              ))}
              {ikey === name ? (
                <ImagesPage
                  data={item}
                  title={`${name === "" ? "Popular" : name} Place`}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionGallery;
