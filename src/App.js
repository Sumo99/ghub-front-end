import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Provider } from "./context";
import Header from "./components/Header/Header";
import LoginView from "./views/LoginView";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
        <Header />
          <div>
            <Switch>
              {/* <Route exact path='/dashboard' component={} /> */}
              <Route path='/login' component={LoginView} />
              {/* <Route path='/results/:user' component={} /> */}
              {/* <Route component={} /> Not Found Component here */}
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
