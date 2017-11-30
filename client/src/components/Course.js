import React, { Component } from "react";

class Course extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getCourse(id);
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <div><b>ID:</b> {this.props.course._id}</div>
        <div><b>Name:</b> {this.props.course.name}</div>
        <div><b>Length:</b> {this.props.course.length}</div>
        <div><b>Subject:</b> {this.props.course.subject}</div>
      </div>
    );
  }
}
export default Course;