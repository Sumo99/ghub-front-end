import React from "react";
import "./Header.scss";

import { Consumer } from "../../context/context";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <Consumer>
      {({ authorized, dispatch }) => {
        return (
          <div className="bg-gray-dark header-style">
            <div className="main-nav d-flex flex-justify-between flex-items-baseline px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark">
              <LeftHeader />
              <RightHeader authorized={authorized} dispatch={dispatch} />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Header;
