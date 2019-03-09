import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
          {/*Header / Navigation here*/}
            <div className="container">
              <Switch>
                <Route exact path='/' component={} />
                <Route path='/results/:user' component={} />
                <Route component={} /> {/*Not Found Component here*/}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
      )
  }
}

export default App;
