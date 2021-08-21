import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import NavHeader from "./NavHeader";

const Navbar = ({ location }) => {
  const { pathname } = location;
  const [showbanner, setshowbanner] = useState(true);
  useEffect(() => {
    setshowbanner(pathname === "/" || pathname === "/home");
  }, [pathname]);

  return (
    <>
      <NavHeader pathname={pathname} />
      <div
        className={showbanner ? "main-content" : "main-content inner"}
        id="home"
      >
        {showbanner ? <Banner /> : null}
      </div>
    </>
  );
};

export default Navbar;
