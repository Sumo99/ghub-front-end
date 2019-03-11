import React, { Component } from "react";

export default class LoginView extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    })
    this.props.history.push('/');
  }

  render() {
    return (
        <div className="d-flex flex-column flex-row flex-items-center flex-justify-center py-4 my-4">
          <h2 className="text-shadow-light f2-light d-block py-3">
            Sign in to GitHub User Breakdown
          </h2>
          <div className="Box box-shadow" style={{ width: "20%" }}>
            <div className="Box-body">
              <form onSubmit={this.handleSubmit}>
                <fieldset className="my-2">
                  <label className="d-block mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-control width-full mb-2"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    onChange={this.handleInput}
                    value={this.state.email}
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
              </form>
            </div>
            <div className="Box-footer d-flex flex-justify-end flex-items-center py-2">
              <button className="btn btn-small btn-danger mx-1">
                Cancel
              </button>
              <button 
                className="btn btn-small btn-primary mx-1" 
                type="submit"
                onClick={this.handleSubmit}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
    );
  }
}
