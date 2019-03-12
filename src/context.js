import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        error: ""
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    case "LOG_IN":
      return {
        ...state
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        authorized: true,
        key: action.payload.token,
        username: action.payload.username,
        error: ""
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        authorized: false,
        error: action.payload
      };
    case "LOG_OUT":
      return {
        ...state,
        username: "",
        authorized: false,
        error: ""
      };
    case "SEARCH":
      return {
        ...state
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        results: action.payload,
        error: ""
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        results: [],
        error: action.payload
      };
    case "GET_USER":
      return {
        ...state,
        username: action.payload,
        error: ""
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    authorized: false,
    results: [],
    username: "",
    error: "",
    key: "",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentWillMount() {
    let userData = localStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      this.setState({
        authorized: true,
        username: userData.username
      });
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
