import React, { Component } from "react";
import axios from "axios";

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
        ...state,
        username: action.payload.user,
        authorized: true,
        error: ""
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
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    // check authorization
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
