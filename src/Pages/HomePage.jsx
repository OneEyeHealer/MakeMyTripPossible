import React from "react";
import SectionAbout from "../Components/SectionAbout";
import SectionGallery from "../Components/SectionGallery";
import SectionPortfolio from "../Components/SectionPortfolio";
import SectionStats from "../Components/SectionStats";
import SectionWhyus from "../Components/SectionWhyus";
function HomePage({ honeymoon, datahm, title, data, tourPlace, setTourPlace }) {
  return (
    <>
      <SectionPortfolio
        heading={honeymoon}
        data={datahm}
        tourPlace={tourPlace}
        setTourPlace={setTourPlace}
      />
      <SectionPortfolio
        heading={title}
        data={data}
        tourPlace={tourPlace}
        setTourPlace={setTourPlace}
      />
      <SectionWhyus />
      <SectionAbout />
      <SectionStats />
      <SectionGallery />
    </>
  );
}

export default HomePage;
