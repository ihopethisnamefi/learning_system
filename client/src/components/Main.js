import React, { Component } from "react";
import CoursesContainer from "../containers/CoursesContainer";
import CreateCourseContainer from "../containers/CreateCourseContainer";
import SearchCoursesContainer from "../containers/SearchCoursesContainer";
import EditCourseContainer from "../containers/EditCourseContainer";
import FavsContainer from "../containers/FavsContainer";

class Main extends Component {
  constructor() {
    super();
  } 

  componentDidMount() {
    this.props.loadCourses();
  }
  render() {
      return (
        <div>
          <div style={{float: "left", width: "49%"}}>
            <center><h1>Courses List </h1></center>
            <CoursesContainer />
            <center><h1>Favorites</h1></center>
            <FavsContainer user={this.props.match.params.user}/>
          </div>
          <div style={{float: "left", width: "49%"}}>
            <div><CreateCourseContainer /></div>
            <div><SearchCoursesContainer /></div>
            <div><EditCourseContainer /></div>
          </div>
        </div>
      );
    }
}
export default Main;
