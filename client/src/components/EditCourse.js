import React from "react";
import {Dropdown, Input, Button} from "semantic-ui-react";
import './EditCourse.css';

class EditCourse extends React.Component {
  constructor() {
    super();
    this.state = {
        fieldsVisible: false,
        nameVisible: false,
        subjectVisible: false,
        lengthVisible: false,
        nameEditFlagVisible: false,
        subjectEditFlagVisible: false,
        lengthEditFlagVisible: false,
        errorEditFlagVisible: false,
      course: {
        _id: "",
        name: "",
        length: "",
        subject: "",
      },
    };
  }

  selectID = (e, { value }) => {
    const course = {_id: value,};
    this.setState({
      fieldsVisible: true,
      course: Object.assign(this.state.course,course)
    })
  }

  selectField = (e, { value }) => {
    if (value === "name"){
        var state = {
            nameVisible: true,
            subjectVisible: false,
            lengthVisible: false,
        }
    }
    if (value === "subject"){
        var state = {
            subjectVisible: true,
            nameVisible: false,
            lengthVisible: false,
        }
    }
    if (value === "length"){
        var state = {
            lengthVisible: true,
            subjectVisible: false,
            nameVisible: false,
        }
    }
    this.setState(state);
    
  }

  render() {
    let courseIDs = [];
    courseIDs = this.props.courses.map(function(c){
        return {
            text: c._id,
            value: c._id
        }
    });
    let nameEditFlag = "";
    if (this.state.nameEditFlagVisible === true ){
      nameEditFlag= "Please enter a valid name (letters and spaces only)";
    }
    else{
      nameEditFlag = "";
    }
    let subjectEditFlag = "";
    if (this.state.subjectEditFlagVisible === true ){
      subjectEditFlag= "Please enter a valid subject (letters only)";
    }
    else{
      subjectEditFlag= "";
    }
    let lengthEditFlag = "";
    if (this.state.lengthEditFlagVisible === true ){
      lengthEditFlag= "Please enter a valid length (numbers) only)";
    }
    else{
      lengthEditFlag= "";
    }
    let errorEditFlag = "";
    if (this.state.errorEditFlagVisible === true ){
      errorEditFlag= "Cannot edit field. Please fix error first and make sure field is populated.";
    }
    else{
      errorEditFlag= "";
    }
    let fields = [
        {
            text: "name",
            value: "name"
        },
        {
            text: "length",
            value: "length" 
        },
        {
            text: "subject",
            value: "subject" 
        }
    ]
    let fieldsDropdown = "";
    if (this.state.fieldsVisible){
        fieldsDropdown= <div className="dropdown">
              Select Field to Edit: 
              <Dropdown placeholder="Courses" fluid selection onChange={this.selectField} options={fields} />
            </div>
    }
    let changeName = "";
    if (this.state.nameVisible){
        changeName = <div>
                            Name: <Input placeholder="Letters and Spaces" onChange={(e) => {
                            if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === ""){    
                              let tempCourse = this.props.courses.filter((c) => { 
                                  return c._id === this.state.course._id; 
                              });
                              //console.log(tempCourse);
                              const course = {name: e.target.value,
                                              length: tempCourse[0].length,
                                              subject: tempCourse[0].subject};
                              this.setState({
                                  nameEditFlagVisible: false,
                                  course: Object.assign(this.state.course,course)
                              });
                            }
                            else{
                              this.setState({
                                  nameEditFlagVisible: true
                                });

                            }
                            }} />
                    </div>
    }
    let changeSubject = "";
    if (this.state.subjectVisible){
        changeSubject = <div>
              Subject: <Input placeholder="Letters Only" onChange={(e) => {
                if (/^[a-zA-Z]+$/.test(e.target.value) || e.target.value === ""){   
                  let tempCourse = this.props.courses.filter((c) => { 
                      return c._id === this.state.course._id; 
                  });
                  //console.log(tempCourse);
                  const course = {subject: e.target.value,
                                  length: tempCourse[0].length,
                                  name: tempCourse[0].name};
                  this.setState({
                    subjectEditFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                  this.setState({
                    subjectEditFlagVisible: true
                  });
                }
              }} />
            </div>
    }
    let changeLength = "";
    if (this.state.lengthVisible){
        changeLength = <div>
              Length: <Input placeholder="Number" onChange={(e) => {
                if (/^[0-9]+$/.test(e.target.value) || e.target.value === ""){    
                  let tempCourse = this.props.courses.filter((c) => { 
                      return c._id === this.state.course._id; 
                  });
                  //console.log(tempCourse);
                  const course = {length: e.target.value,
                                  subject: tempCourse[0].subject,
                                  name: tempCourse[0].name};
                  this.setState({
                    lengthEditFlagVisible: false,
                    course: Object.assign(this.state.course,course)
                  });
                }
                else{
                  this.setState({
                    lengthEditFlagVisible: true
                  });
                }
              }} />
            </div>
    }

    return (
        
      <div>
          <center>
        <div>
          <h1>Edit Course</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.updateCourse && this.state.nameEditFlagVisible === false &&
              this.state.lengthEditFlagVisible === false && this.state.subjectEditFlagVisible === false  &&
              this.state.course.name !== "" && this.state.course.length !== "" && this.state.course.subject !== "") {
              
                this.props.updateCourse(this.state.course);
                this.setState({
                      errorEditFlagVisible: false
                });
              }
              else{
                this.setState({
                      errorEditFlagVisible: true
                    });
              }
            }
          }>
            <div className="dropdown">
              Select Course ID to Edit: 
              <Dropdown placeholder="Courses" fluid selection onChange={this.selectID} options={courseIDs} />
            </div>
            {fieldsDropdown}
            {changeName}
            {nameEditFlag}
            {changeSubject}
            {subjectEditFlag}
            {changeLength}
            {lengthEditFlag}
            <div><Button>Edit</Button></div>
            {errorEditFlag}
          </form>     
      </div>
      </center>
    </div>
      
    );
  }
}
export default EditCourse;
