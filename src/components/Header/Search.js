import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    props.history.push(`/results/${query}`);
  };
  return (
    <div className="d-flex flex-self-auto flex-justify-end mr-2 mr-md-3 search-form">
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
            className="form-control f4 f-lg-5 search-dark"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <input type="submit" className="d-none" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Search);
