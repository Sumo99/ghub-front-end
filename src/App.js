import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.scss";

import { Provider } from "./context";
import Header from "./components/Header/Header";
import LoginView from "./views/LoginView";
import NotFound from "./views/NotFound";
import SearchResult from "./views/SearchResult";
<<<<<<< HEAD
import DashboardView from "./views/DashboardView";
=======
>>>>>>> develop

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div>
<<<<<<< HEAD
            <DashboardView />
=======
            <Switch>
              {/* <Route exact path='/dashboard' component={} /> */}
              <Route path="/login" component={LoginView} />
              <Route path="/results/" component={SearchResult} />
              <Redirect from="/" to="/login" />
              <Route component={NotFound} />
            </Switch>
>>>>>>> develop
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
