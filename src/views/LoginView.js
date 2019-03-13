import React, { Component } from "react";

import { Consumer } from "../context/context";
import { LoginForm, RegisterForm } from "../components/Forms/Forms";
import { register, login } from "../context/actions";

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

  handleFormSwitch = e =>
    this.setState(prevState => ({
      isNewRegistrant: !prevState.isNewRegistrant
    }));

  handleSubmit = (e, dispatch) => {
    e.preventDefault();
    if (this.state.isNewRegistrant) {
      const userData = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      };
      register(dispatch, userData).then(() => {
        this.setState({
          isNewRegistrant: false,
          username: "",
          password: "",
          email: ""
        });
      });
    } else {
      const userData = {
        username: this.state.username,
        password: this.state.password
      };
      login(dispatch, userData).then(() => {
        this.props.history.push("/dashboard");
      });
    }
  };

  render() {
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="d-flex flex-column flex-row flex-items-center flex-justify-center py-4 my-4">
            <h2 className="text-shadow-light f2-light d-block py-3">
              Sign in to GitHub User Breakdown
            </h2>
            <div className="Box col-11 col-sm-8 col-md-6 col-lg-3 box-shadow">
              {this.state.isNewRegistrant ? (
                <RegisterForm
                  email={this.state.email}
                  username={this.state.username}
                  password={this.state.password}
                  handleInput={this.handleInput}
                  handleFormSwitch={this.handleFormSwitch}
                  handleSubmit={this.handleSubmit}
                  dispatch={dispatch}
                />
              ) : (
                <LoginForm
                  email={this.state.email}
                  username={this.state.username}
                  password={this.state.password}
                  handleInput={this.handleInput}
                  handleFormSwitch={this.handleFormSwitch}
                  handleSubmit={this.handleSubmit}
                  dispatch={dispatch}
                />
              )}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
