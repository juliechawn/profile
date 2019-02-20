import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import AppHome from "./AppHome";
import AppWork from "./AppWork";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={AppHome} />
            <Route path="/work" component={AppWork} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
