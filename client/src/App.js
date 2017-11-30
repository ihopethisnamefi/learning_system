import React, { Component } from "react";
import "./App.css";
import Main from "./containers/MainContainer";
import Course from "./containers/CourseContainer";
import FileLoad from "./containers/FileLoadContainer";

import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>  
            <Route path="/course/:id" component={Course} />
            <Route path="/courses/:user" component={Main} />
            <Route path="/" component={FileLoad} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);


