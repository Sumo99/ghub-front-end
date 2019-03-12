import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../context";
import {LoginForm, RegisterForm } from "../components/Forms/Forms"

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
      dispatch({ type: "REGISTER" });
      axios
        .post(
          "https://github-user-breakdown-backend.herokuapp.com/api/auth/register",
          {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          }
        )
        .then(() => {
          dispatch({ type: "REGISTER_SUCCESS" });
          this.setState({
            isNewRegistrant: false,
            username: "",
            password: "",
            email: ""
          });
        })
        .catch(err => dispatch({ type: "REGISTER_ERROR", payload: err }));
    } else {
      dispatch({ type: "LOG_IN" });
      axios
        .post(
          "https://github-user-breakdown-backend.herokuapp.com/api/auth/login",
          {
            username: this.state.username,
            password: this.state.password
          }
        )
        .then(res => {
          dispatch({ type: "LOG_IN_SUCCESS", payload: res.data.token });
          this.setState({
            username: "",
            password: ""
          });
          this.props.history.push("/results");
        })
        .catch(err =>
          dispatch({
            type: "LOG_IN_FAILURE",
            payload: err.response.data.message
          })
        );
    }
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
              {this.state.isNewRegistrant 
                ? <LoginForm 
                    email={this.state.email}
                    username={this.state.username}
                    password={this.state.password}
                    handleInput={this.handleInput}
                    handleFormSwitch={this.handleFormSwitch}
                    handleSubmit={this.handleSubmit}
                    dispatch={dispatch}
                  /> 
                : <RegisterForm
                  email={this.state.email}
                  username={this.state.username}
                  password={this.state.password}
                  handleInput={this.handleInput}
                  handleFormSwitch={this.handleFormSwitch}
                  handleSubmit={this.handleSubmit}
                  dispatch={dispatch}
                />}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
