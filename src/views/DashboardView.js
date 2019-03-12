import React, { useState } from "react";
import { Consumer } from "../context";
import Octicon, { ChevronRight } from "@githubprimer/octicons-react";

const emptyForm = {
  username: ""
};

const DashboardView = () => {
  const [{ username }, setState] = useState(emptyForm);

  const handleInput = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  const handleSubmit = dispatch => e => {
    e.preventDefault();
    dispatch({
      type: "SEARCH",
      payload: {
        username
      }
    });
    setState(emptyForm);
  };

  return (
    <Consumer>
      {({ dispatch }) => (
        <div className="d-flex flex-column container-lg flex-row flex-items-center flex-justify-center py-4 my-4">
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
                    value={username}
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
        </div>
      )}
    </Consumer>
  );
};

export default DashboardView;
