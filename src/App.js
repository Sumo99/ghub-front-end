import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Provider } from "./context";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              {/*<Route exact path='/dashboard' component={} />
              <Route path='/login' component={} />
              <Route path='/results/:user' component={} />
              <Route component={} />
              <Redirect from='/' to='/login' />*/}
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
