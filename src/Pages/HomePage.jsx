import React from "react";
import SectionAbout from "../Components/SectionAbout";
import SectionGallery from "../Components/SectionGallery";
import SectionPortfolio from "../Components/SectionPortfolio";
import SectionStats from "../Components/SectionStats";
import SectionWhyus from "../Components/SectionWhyus";
function HomePage({ title, data }) {
  return (
    <>
      <SectionPortfolio heading={title} data={data} />
      <SectionWhyus />
      <SectionAbout />
      <SectionStats />
      <SectionGallery />
    </>
  );
}

export default HomePage;
