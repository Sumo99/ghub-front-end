import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-bar/dist/index.css";
import "./App.scss";

import { Provider } from "./context/context";
import ProtectedRoute from "./auth/ProtectedRoute";
import Header from "./components/Header/Header";
import LoadingBar from "./components/Loading/LoadingBar";
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
          <div className="content">
            <LoadingBar />
            <Switch>
              <ProtectedRoute
                exact
                path="/dashboard"
                component={DashboardView}
              />
              <Route path="/login" component={LoginView} />
              <ProtectedRoute
                path="/results/:username"
                component={SearchResult}
              />
              <Redirect exact from="/" to="/login" />
              <Route component={NotFound} />
            </Switch>
            <ToastContainer
              autoClose={2000}
              position="top-center"
              hideProgressBar
              closeButton={false}
            />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
