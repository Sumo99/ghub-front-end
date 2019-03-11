import React, { Component } from "react";

export default class LoginView extends Component {
  render() {
    return (
        <div className="d-flex flex-column flex-row flex-items-center flex-justify-center py-4 my-4">
          <h2 className="text-shadow-light f2-light d-block py-3">
            Sign in to GitHub User Breakdown
          </h2>
          <div className="Box" style={{ width: "20%" }}>
            <div className="Box-body">
              <form>
                <fieldset className="my-2">
                  <label className="d-block mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-control width-full mb-2"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                </fieldset>
                <fieldset className="mb-2">
                  <label className="d-block mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control width-full mb-2"
                    id="password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </fieldset>
              </form>
            </div>
            <div className="Box-footer d-flex flex-justify-end flex-items-center py-2">
              <button className="btn btn-small btn-danger mx-1">
                Cancel
              </button>
              <button 
                className="btn btn-small btn-primary mx-1" 
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
    );
  }
}
