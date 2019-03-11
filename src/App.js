import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import { Provider } from './context';

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
        {/*Header / Navigation here*/}
          <div className="container">
            <Switch>
              <Route exact path='/dashboard' component={} />
              <Route path='/login' component={} />
              <Route path='/results/:user' component={} />
              <Route component={} /> {/*Not Found Component here*/}
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
