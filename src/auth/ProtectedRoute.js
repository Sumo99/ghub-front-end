import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Consumer } from "../context";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Consumer>
    {({ authorized }) => (
      <Route
        render={props =>
          authorized ? <Component {...props} /> : <Redirect to="/login" />
        }
        {...rest}
      />
    )}
  </Consumer>
);

export default ProtectedRoute;
