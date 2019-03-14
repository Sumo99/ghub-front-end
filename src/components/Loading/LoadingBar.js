import React from "react";
import Loading from "react-loading-bar";

import { Consumer } from "../../context/context";

const LoadingBar = () => {
  return (
    <Consumer>
      {({ loading }) => (
        <Loading
          show={loading}
          color="#28a745"
          style={{ position: "absolute" }}
        />
      )}
    </Consumer>
  );
};

export default LoadingBar;
