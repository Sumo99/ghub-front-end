import React from "react";
import Loader from "react-loader-spinner";

const LoadingWheel = props => {
  return (
    <div className="d-flex flex-column flex-justify-center flex-items-center">
      <Loader type="TailSpin" color="#28a745" height="5em" width="5em" />
      <p>Please wait while we load {props.text}</p>
    </div>
  );
};

export default LoadingWheel;
