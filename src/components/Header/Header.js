import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import { Consumer } from "../../context";

const headerStyle = {
  zIndex: "99",
  position: "sticky",
  top: "0",
  left: "0",
  right: "0"
};

const Header = props => {
  const [searchInput, updateSearchInput] = useState("");

  const logoutAction = () => {
    /*
        logout dispatch here
        .then history.push('/')
        */
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    /*
        search dispatch here
      &.then  history.push(`/results/${searchInput}`) clear search input &*/
  };
  return (
    <Consumer>
      {value => {
        const { authorized, dispatch } = value;
        return (
          <div className="bg-gray-dark" style={headerStyle}>
            <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark">
              <div className="d-flex flex-justify-between flex-self-center flex-lg-auto mr-lg-2">
                <div className="flex-self-center h3 text-white px-md-1 px-lg-2">
                  GitHub User Breakdown
                </div>
              </div>
              <div className="d-lg-flex flex-justify-end">
                <nav
                  className="flex-self-center flex-shrink-0 text-white"
                  aria-label="Primary"
                >
                  <NavLink
                    activeClassName="text-bold"
                    className="text-white px-md-1 px-lg-2"
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeClassName="text-bold"
                    className="text-white px-md-1 px-lg-2"
                    to="/dashboard"
                  >
                    Search
                  </NavLink>
                  {authorized ? (
                    <NavLink
                      activeClassName="text-bold"
                      className="text-white px-md-1 px-lg-2"
                      to="#"
                      onClick={logoutAction}
                    >
                      Log Out
                    </NavLink>
                  ) : (
                    <NavLink
                      activeClassName="text-bold"
                      className="text-white px-md-1 px-lg-2"
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  )}
                </nav>
              </div>
              {authorized && (
                <div className="d-flex flex-self-auto flex-justify-end col-12 col-lg-2">
                  <div className="flex-self-center flex-auto col-12 ml-2 ml-lg-3">
                    <form
                      autoComplete="off"
                      className="mb-0 position-relative mx-2"
                      onSubmit={handleFormSubmit}
                    >
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Search GitHub Users"
                        className="form-control width-full f4 f-lg-5 search-dark"
                        value={searchInput}
                        onChange={e => updateSearchInput(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Header;
