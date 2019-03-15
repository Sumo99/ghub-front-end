import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { logout } from "../../context/actions";

const Nav = props => {
  const logoutAction = dispatch => {
    logout(dispatch);
  };

  return (
    <div className="d-flex flex-justify-end">
      <nav className="flex-shrink-0 text-white" aria-label="Primary">
        {props.authorized ? (
          <NavLink
            activeClassName="text-bold"
            className="text-white px-2 px-md-1 px-lg-2"
            exact
            to={"/dashboard"}
          >
            Home
          </NavLink>
        ) : (
          <a
            className="text-white px-2 px-md-1 px-lg-2"
            href="https://distracted-hoover-00aed4.netlify.com/"
          >
            Home
          </a>
        )}
        {props.authorized ? (
          <NavLink
            activeClassName="text-bold"
            className="text-white px-2 px-md-1 px-lg-2"
            to="#"
            onClick={() => logoutAction(props.dispatch)}
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            activeClassName="text-bold"
            className="text-white px-2 px-md-1 px-lg-2"
            to="/login"
          >
            Log In
          </NavLink>
        )}
      </nav>
    </div>
  );
};

Nav.propTypes = {
  authorized: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Nav;
