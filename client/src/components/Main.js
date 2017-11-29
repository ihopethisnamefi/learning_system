import React from "react";
import CoursesContainer from "../containers/CoursesContainer";
import CreateCourseContainer from "../containers/CreateCourseContainer";
import SearchCoursesContainer from "../containers/SearchCoursesContainer";
import EditCourseContainer from "../containers/EditCourseContainer";
import FavsContainer from "../containers/FavsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <center><h1>Courses List </h1></center>
        <CoursesContainer />
        <center><h1>Favorites</h1></center>
        <FavsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <p><CreateCourseContainer /></p>
        <p><SearchCoursesContainer /></p>
        <p><EditCourseContainer /></p>
      </div>
    </div>
  );
}
export default Main;
