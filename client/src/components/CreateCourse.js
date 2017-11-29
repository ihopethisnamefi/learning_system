import React from "react";
import {Input, Button} from "semantic-ui-react";

class CreateCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      idFlagVisible: false,
      nameFlagVisible: false,
      lengthFlagVisible: false,
      subjectFlagVisible: false,
      errorFlagVisible: false,
      course: {
        _id: "",
        name: "",
        length: "",
        subject: "",
      },
    };
  }
  render() {
    let idFlag = "";
    if (this.state.idFlagVisible === true ){
      idFlag = "Please Enter A Valid ID (5 digit number)";
    }
    else{
      idFlag = "";
    }
    let nameFlag = "";
    if (this.state.nameFlagVisible === true ){
      nameFlag= "Please Enter A Valid Name (Letters Only)";
    }
    else{
      nameFlag = "";
    }
    let lengthFlag = "";
    if (this.state.lengthFlagVisible === true ){
      lengthFlag= "Please Enter A Valid Length (Numbers Only)";
    }
    else{
      lengthFlag = "";
    }
    let subjectFlag = "";
    if (this.state.subjectFlagVisible === true ){
      subjectFlag= "Please Enter A Valid Subject (Letters Only)";
    }
    else{
      subjectFlag = "";
    }
    let errorFlag = "";
    if (this.state.errorFlagVisible === true ){
      errorFlag= "Cannot Create. Please Fix Errors First";
    }
    else{
      errorFlag = "";
    }
    return (
      <div>
        <center>
        <div>
          <h1>Add Course</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createCourse && this.state.idFlagVisible === false && this.state.nameFlagVisible === false &&
              this.state.lengthFlagVisible === false && this.state.subjectFlagVisible === false) {
              this.props.createCourse(this.state.course);
              this.setState({
                      errorFlagVisible: false
                    });
            }
            else{
              this.setState({
                      errorFlagVisible: true
                    });
            }
          }}>
            <div>
              ID: <Input placeholder="5 Digit Number" onChange={(e) => {
                if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length === 5) || e.target.value === ""){
                  const course = {_id: e.target.value};
                  this.setState({
                    idFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                    this.setState({
                      idFlagVisible: true
                    });
                  }
              }} />
            </div>
            {idFlag}
            <div>
              Name: <Input placeholder="Letters And Spaces" onChange={(e) => {
                if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){
                  const course = {name: e.target.value};
                  this.setState({
                    nameFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                  this.setState({
                    nameFlagVisible: true
                    });
                }
              }} />
            </div>
            {nameFlag}
            <div>
              Length: <Input placeholder="Number" onChange={(e) => {
                if (/^[0-9]+$/.test(e.target.value) || e.target.value === ""){
                  const course = {length: e.target.value};
                  this.setState({
                    lengthFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                  this.setState({
                    lengthFlagVisible: true
                    });
                }
              }} />
            </div>
            {lengthFlag}
            <div>
              Subject: <Input placeholder="Letters" onChange={(e) => {
                if (/^[a-zA-Z]+$/.test(e.target.value) || e.target.value === ""){
                  const course = {subject: e.target.value};
                  this.setState({
                    subjectFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                  this.setState({
                    subjectFlagVisible: true
                    });
                }
              }} />
            </div>
            {subjectFlag}
            <div><Button>Create</Button></div>
            {errorFlag}
          </form>
        </div>  
        </center>    
      </div>
      
    );
  }
}
export default CreateCourse;
