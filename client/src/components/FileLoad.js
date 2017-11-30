import React, { Component } from "react";
import {Input, Button} from "semantic-ui-react";

class FileLoad extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
        }
    }

    render() {
        return (
        <div>
            <div>
            <Input type="file" name="file"/></div>
            <div><Input placeholder="User" onChange={(e) => {
                this.setState({
                user: e.target.value,         
                });
                
            }}/>
            </div>
            <Button type='submit' onClick={(e) => {
                //console.log(this.state.user);
                var input = document.querySelector('input[type="file"]'); 
                this.props.uploadDocumentRequest(input);
                this.props.history.push("/courses/" + this.state.user);
            }}>
                    Submit
            </Button>

        </div>
        );
  }
}
export default FileLoad;