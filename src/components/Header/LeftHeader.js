import React from "react";

import HeaderLogo from "./HeaderLogo";
import Heading from "./Heading";

const LeftHeader = () => {
  return (
    <div className="d-flex flex-justify-between flex-auto mr-lg-2">
      <div className="d-flex flex-justify-center flex-items-baseline">
        <HeaderLogo />
        <Heading />
      </div>
    </div>
  );
};

export default LeftHeader;
