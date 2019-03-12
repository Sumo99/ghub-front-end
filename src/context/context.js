import React, { Component } from "react";

import reducer from "./reducer";

const Context = React.createContext();

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
