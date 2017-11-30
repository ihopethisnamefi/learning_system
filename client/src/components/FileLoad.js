import React, { Component } from "react";
import { Modal, Header, Message, Form, Icon, Button, Input} from 'semantic-ui-react';

class FileLoad extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user: "",
            fileTextFlag: false
        }
    }



    onSubmit(e){
        e.preventDefault();
        this.props.history.push("/courses/" + this.state.user);
    }


    render() {
        let fileText = "";
        if (this.state.fileTextFlag === true){
            fileText ="File Loaded";
        }
        else{
            fileText = "";
        }
        return (
            <Modal
                open={true}
                closeOnDimmerClick={false}
                basic
                size='tiny'
            >
            <Header icon='write' content='Upload Courses List and Enter User Name' />
                <Modal.Content>
                    {fileText && <Message negative>
                        <Message.Header>{fileText}</Message.Header>
                    </Message>}
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <Input type="file" name="file" onChange={(e) => {
                                e.preventDefault();
                                let input = document.querySelector('input[type="file"]'); 
                                this.props.uploadDocumentRequest(input)
                                this.setState({
                                    fileTextFlag: true,         
                                    });
                    
                                }}/>
                        </Form.Field>
                        <Form.Field>
                            <Input placeholder="Enter User Name" onChange={(e) => {
                                this.setState({
                                user: e.target.value,         
                                });
                    
                                }}/>
                        </Form.Field>   
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' type='submit' onClick={this.onSubmit} inverted>
                    <Icon name='checkmark' /> Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        );
  }
}
export default FileLoad;