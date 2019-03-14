import React from "react";

const notFoundStyle = {
  position: "absolute",
  top: "50vh",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const NotFound = () => {
  return (
    <div
      className="d-flex flex-justify-center flex-items-center"
      style={notFoundStyle}
    >
      <h2 className="h1 text-bold text-shadow-light text-gray-dark">
        Whoops... 404. Page Not Found!
      </h2>
    </div>
  );
};

export default NotFound;
