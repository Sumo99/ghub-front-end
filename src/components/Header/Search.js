import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = props => {
  const [searchInput, updateSearchInput] = useState("");

  const handleFormSubmit = (e, dispatch) => {
    e.preventDefault();
    /*
            search dispatch here
          &.then  history.push(`/results/${searchInput}`) clear search input &*/
  };
  return (
    <div className="d-flex flex-self-auto flex-justify-end mr-2 mr-md-3 search-form">
      <div className="flex-self-center flex-auto col-12 ml-2 ml-lg-3">
        <form
          autoComplete="off"
          className="mb-0 position-relative mx-2"
          onSubmit={e => handleFormSubmit(e, props.dispatch)}
        >
          <input
            type="text"
            autoComplete="off"
            placeholder="Search GitHub Users"
            className="form-control f4 f-lg-5 search-dark"
            value={searchInput}
            onChange={e => updateSearchInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
