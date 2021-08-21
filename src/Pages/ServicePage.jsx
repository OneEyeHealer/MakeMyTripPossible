import React from "react";
import SectionPortfolio from "../Components/SectionPortfolio";

const ServicePage = ({ title, data }) => {
  return (
    <>
      <SectionPortfolio heading={title} data={data} />
    </>
  );
};

export default ServicePage;
