import React from "react";
import MainBanner from "../../shared/components/Banner/Mainbanner";

const PlaceBanner = (props) => {
  return (
    <MainBanner
      {...props}
      path={props.path}
      title={props.title}
      style={{
        backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0) 30% ), url('${props.url}')`,
        zIndex: 1,
      }}
    />
  );
};

export default PlaceBanner;
