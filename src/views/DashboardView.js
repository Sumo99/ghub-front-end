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
      {({ dispatch, error, results }) => (
        <div className="d-flex flex-column container-lg flex-row flex-items-center flex-justify-center py-4 my-4">
          {error && <div className="flash flash-error">{error}</div>}
          <h2 className="text-shadow-light f2-light d-block py-3">
            Search by GitHub Username
          </h2>
          <div className="Box box-shadow">
            <form onSubmit={handleSubmit(dispatch)}>
              <div className="Box-body">
                <fieldset className="my-3 mx-3">
                  <label className="d-block mb-2" htmlFor="username">
                    GitHub Username
                  </label>
                  <input
                    className="form-control width-full mb-2 input-lg"
                    id="username"
                    style={{ minWidth: "30ch" }}
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
