import React from "react";
import "./Header.scss";

import { Consumer } from "../../context/context";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const headerStyle = {
  zIndex: "99",
  position: "sticky",
  top: "0",
  left: "0",
  right: "0"
};

const Header = props => {
  return (
    <Consumer>
      {value => {
        const { authorized, dispatch } = value;
        return (
          <div className="bg-gray-dark" style={headerStyle}>
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
