import React from "react";
import SectionAbout from "../Components/SectionAbout";
import SectionPortfolio from "../Components/SectionPortfolio";
import SectionStats from "../Components/SectionStats";
function HomePage(props) {
  return (
    <>
      <SectionAbout />
      <SectionStats />
      <SectionPortfolio />
    </>
  );
}

export default HomePage;
