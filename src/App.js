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
import DashboardView from "./views/DashboardView";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div>
            <DashboardView />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
