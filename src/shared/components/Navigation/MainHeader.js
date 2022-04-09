import React from "react";

const MainHeader = (props) => {
  return <header className="header bg-light">{props.children}</header>;
};

export default MainHeader;
