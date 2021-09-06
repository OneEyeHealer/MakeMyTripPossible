import React from "react";
import SectionAbout from "../Components/SectionAbout";
import SectionPortfolio from "../Components/SectionPortfolio";
import SectionStats from "../Components/SectionStats";
function HomePage({ title, data }) {
  return (
    <>
      <SectionPortfolio heading={title} data={data} />
      <SectionAbout />
      <SectionStats />
    </>
  );
}

export default HomePage;
