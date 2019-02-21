import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHome from "./AppHome";
import AppWork from "./AppWork";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={AppHome} />
              <Route path="/work" component={AppWork} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
