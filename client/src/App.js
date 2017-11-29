import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Course from "./containers/CourseContainer";

import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  
  componentDidMount() {
    this.props.loadCourses();
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>  
            <Route path="/course/:id" component={Course} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default (App);


