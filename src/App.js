import React from "react";
import Tutorials from "./tutorials";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/tutorial">tutorial</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tutorial">
            <Tutorials></Tutorials>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
