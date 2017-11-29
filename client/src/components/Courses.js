import React from "react";
import {Link} from "react-router-dom";
import { Grid,Table,Button} from 'semantic-ui-react';

function Courses(props) {
  let coursesDivs = null;
  if(props.courses){
    coursesDivs = props.courses.filter(function(c){
      return !props.nameFilter || 
      (props.nameFilter && 
      c.name.toLowerCase().indexOf(props.nameFilter.toLowerCase())  > -1) || (props.nameFilter && 
        c.subject.toLowerCase().indexOf(props.nameFilter.toLowerCase())  > -1) || (props.nameFilter && 
          c._id.toString().indexOf(props.nameFilter)  > -1) || (props.nameFilter && 
            c.length.toString().indexOf(props.nameFilter)  > -1);
    })
  }
  return (
    <div>
      <Grid centered>
        <Grid.Row>
        </Grid.Row>
     
          <Grid.Column computer={6} tablet={6} mobile={6}>
        
                <Table basic='very' celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Length</Table.HeaderCell>
                      <Table.HeaderCell>Subject</Table.HeaderCell>
                      <Table.HeaderCell>View Detail</Table.HeaderCell>
                      <Table.HeaderCell>Add Favorites</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  
                  <Table.Body>
                      { coursesDivs.map((c, index) =>
                        <Table.Row>
                          <Table.Cell>
                            {c._id}
                          </Table.Cell>
                          <Table.Cell>
                            {c.name}
                          </Table.Cell>
                          <Table.Cell>
                            {c.length}
                          </Table.Cell>
                          <Table.Cell>
                            {c.subject}
                          </Table.Cell>
                          <Table.Cell>
                            <Link to={"/course/" + c._id}> View </Link>
                          </Table.Cell>
                          <Table.Cell>
                            <Button onClick={
                                  (e) => {
                                      var state = props.saveFavs(c);
                                      this.setState(state);
                                  }
                                    }>Add</Button>
                          </Table.Cell>
                        </Table.Row>
                        )}
                  </Table.Body>
                </Table>
  
            </Grid.Column>
      
      </Grid>
    </div>
  );
}
export default Courses;
