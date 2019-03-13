import React, { useState } from "react";
import Octicon, { ChevronRight } from "@githubprimer/octicons-react";
import { Consumer } from "../context/context";
import { search } from "../context/actions";
import { SearchResultsList } from "../components/Dashboard";

const DashboardView = () => {
  const [query, setQuery] = useState("");

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = dispatch => e => {
    e.preventDefault();
    search(dispatch, query);
    setQuery("");
  };

  return (
    <Consumer>
      {({ dispatch, results }) => (
        <div className="container-lg d-flex flex-column flex-justify-center flex-items-center">
          <h2 className="text-center text-shadow-light f2-light d-block py-3">
            Search by GitHub Username
          </h2>
          <div className="Box box-shadow col-lg-6">
            <form onSubmit={handleSubmit(dispatch)}>
              <div className="Box-body">
                <fieldset className="my-3 mx-3">
                  <label className="d-block mb-2" htmlFor="username">
                    GitHub Username
                  </label>
                  <input
                    className="form-control width-full mb-2 input-lg"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="GitHub Username"
                    aria-label="GitHub Username"
                    onChange={handleInput}
                    value={query}
                  />
                </fieldset>
              </div>
              <div className="Box-footer d-flex flex-justify-end flex-items-center py-2">
                <button className="btn btn-large btn-primary my-2 mx-2">
                  Search <Octicon icon={ChevronRight} />
                </button>
              </div>
            </form>
          </div>
          {results.length > 0 && <SearchResultsList results={results} />}
        </div>
      )}
    </Consumer>
  );
};

export default DashboardView;
