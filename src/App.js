import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "./context/context";
import ProtectedRoute from "./auth/ProtectedRoute";
import Header from "./components/Header/Header";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";
import NotFound from "./views/NotFound";
import SearchResult from "./views/SearchResult";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Switch>
              <ProtectedRoute
                exact
                path="/dashboard"
                component={DashboardView}
              />
              <Route path="/login" component={LoginView} />
              <ProtectedRoute path="/results/" component={SearchResult} />
              <Redirect exact from="/" to="/login" />
              <Route component={NotFound} />
            </Switch>
            <ToastContainer
              autoClose={2000}
              position="top-center"
            />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
