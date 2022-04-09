import React from "react";
import FooterLinks from "./FooterLinks";
import MainFooterBottom from "./MainFooterBottom";
import MainFooterHeader from "./MainFooterHeader";
import "./Footer.css";

const MainFooterNavigation = () => {
  return (
    <MainFooterHeader>
      <div className="foo_top_header_one section_padding_100_70">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <FooterLinks AboutUs Title={"About Us"} />

              <FooterLinks SocialLinks Title="Social Links" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <FooterLinks TripWidget Title="Trip Widget" />

              <FooterLinks ImpLinks Title="Important Links" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <FooterLinks LatestBlogs Title="Latest Blogs" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <FooterLinks ContactLinks Title="Quick Contact" />

              <FooterLinks LatestTrips Title="Latest Trips" />
            </div>
          </div>
        </div>
      </div>
      <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
        <MainFooterBottom />
      </div>
    </MainFooterHeader>
  );
};

export default MainFooterNavigation;
