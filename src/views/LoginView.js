import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../context";

export default class LoginView extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    isNewRegistrant: false
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Consumer>
        {({ dispatch, error }) => (
      <div className="d-flex flex-column flex-row flex-items-center flex-justify-center py-4 my-4">
            {error ? <div className="flash flash-error">{error}</div> : null}
        <h2 className="text-shadow-light f2-light d-block py-3">
          Sign in to GitHub User Breakdown
        </h2>
        <div className="Box col-11 col-sm-8 col-md-6 col-lg-3 box-shadow">
              <form onSubmit={e => this.handleSubmit(e, dispatch)}>
          <div className="Box-body">
              {this.state.isNewRegistrant && (
                <fieldset className="my-2">
                  <label className="d-block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control width-full mb-2"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="email"
                    aria-label="email"
                    onChange={this.handleInput}
                    value={this.state.email}
                  />
                </fieldset>
              )}
              <fieldset className="my-2">
                <label className="d-block mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="form-control width-full mb-2"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                  aria-label="username"
                  onChange={this.handleInput}
                  value={this.state.username}
                />
              </fieldset>
              <fieldset className="mb-2">
                <label className="d-block mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control width-full mb-2"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  onChange={this.handleInput}
                  value={this.state.password}
                />
              </fieldset>
          </div>
          <div className="Box-footer d-flex flex-justify-between flex-items-center py-2">
                  <button
                    type="button"
                    className="btn btn-small"
                    onClick={this.handleFormSwitch}
                  >
                    Register
                  </button>

            <div>
                    <button
                      type="button"
                      className="btn btn-small btn-danger mx-1"
                    >
                      Cancel
                    </button>
              <button
                className="btn btn-small btn-primary mx-1"
                type="submit"
                      onClick={e => this.handleSubmit(e, dispatch)}
              >
                Sign In
              </button>
            </div>
          </div>
              </form>
        </div>
      </div>
        )}
      </Consumer>
    );
  }
}
