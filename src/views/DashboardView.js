import React, { useState } from "react";

const emptyForm = {
  username: ""
};

const DashboardView = () => {
  const [{ username }, setState] = useState(emptyForm);

  const handleInput = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState(emptyForm);
    // Axios call here?
  };

  return (
    <div className="d-flex flex-column container-lg flex-row flex-items-center flex-justify-center py-4 my-4">
      <h2 className="text-shadow-light f2-light d-block py-3">
        Search by GitHub Username
      </h2>
      <div className="Box box-shadow">
        <form onSubmit={handleSubmit}>
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
            <button
              className="btn btn-large btn-primary mx-1"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardView;
