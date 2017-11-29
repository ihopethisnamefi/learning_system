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
                            Name: <Input placeholder="Text" onChange={(e) => {
                                
                            let tempCourse = this.props.courses.filter((c) => { 
                                return c._id === this.state.course._id; 
                            });
                            //console.log(tempCourse);
                            const course = {name: e.target.value,
                                            length: tempCourse[0].length,
                                            subject: tempCourse[0].subject};
                            this.setState({
                                course: Object.assign(this.state.course,course)
                            });
                            }} />
                    </div>
    }
    let changeSubject = "";
    if (this.state.subjectVisible){
        changeSubject = <div>
              Subject: <Input placeholder="Text" onChange={(e) => {
                    
                let tempCourse = this.props.courses.filter((c) => { 
                    return c._id === this.state.course._id; 
                });
                //console.log(tempCourse);
                const course = {subject: e.target.value,
                                length: tempCourse[0].length,
                                name: tempCourse[0].name};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
              }} />
            </div>
    }
    let changeLength = "";
    if (this.state.lengthVisible){
        changeLength = <div>
              Length: <Input placeholder="Number" onChange={(e) => {
                    
                let tempCourse = this.props.courses.filter((c) => { 
                    return c._id === this.state.course._id; 
                });
                //console.log(tempCourse);
                const course = {length: e.target.value,
                                subject: tempCourse[0].subject,
                                name: tempCourse[0].name};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
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
            if (this.props.updateCourse) {
              this.props.updateCourse(this.state.course);
            }
          }}>
            <div className="dropdown">
              Select Course ID to Edit: 
              <Dropdown placeholder="Courses" fluid selection onChange={this.selectID} options={courseIDs} />
            </div>
            {fieldsDropdown}
            {changeName}
            {changeSubject}
            {changeLength}
            <Button>Edit</Button>
          </form>     
      </div>
      </center>
    </div>
      
    );
  }
}
export default EditCourse;
