import React from "react";
import Octicon, { CircuitBoard } from "@githubprimer/octicons-react";

const HeaderLogo = props => {
  return (
    <Octicon
      icon={CircuitBoard}
      className="text-white flex-self-center"
      size="medium"
    />
  );
};

export default HeaderLogo;
