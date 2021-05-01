import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styled from "styled-components";
import Register from "../components/Register";
import Players from "../components/Players";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Register />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
