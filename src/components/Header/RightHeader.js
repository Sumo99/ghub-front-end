import React from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";
import Search from "./Search";

const RightHeader = props => {
  return (
    <React.Fragment>
      <Nav authorized={props.authorized} dispatch={props.dispatch} />
      {props.authorized && <Search dispatch={props.dispatch} />}
    </React.Fragment>
  );
};

RightHeader.propTypes = {
  authorized: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default RightHeader;
