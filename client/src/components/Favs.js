import React from "react";
import {Link} from "react-router-dom";
import { Grid,Table,Button,Header} from 'semantic-ui-react';

function Favs(props) {
  let favsDivs = props.favs;
  let coursesNumber = favsDivs.length;
  let credits = 0;
  for (let i=0; i<coursesNumber; i++){
      credits = credits + favsDivs[i].length;
  }
  let courseString = "";
  if (coursesNumber === 1){
    courseString = "course";
  }
  else{
    courseString = "courses";   
  }
  return (
    <div>
      <Grid centered>
        <Grid.Row>
        </Grid.Row>
     
          <Grid.Column computer={6} tablet={6} mobile={6}>
            <Header>User has signed up for {coursesNumber} {courseString} with {credits} credits</Header>
                <Table basic='very' celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Length</Table.HeaderCell>
                      <Table.HeaderCell>Subject</Table.HeaderCell>
                      <Table.HeaderCell>View Detail</Table.HeaderCell>
                      <Table.HeaderCell>Remove Favorites</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  
                  <Table.Body>
                      { favsDivs.map((c, index) =>
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
                                      var state = props.removeFav(c._id);
                                      this.setState(state);
                                  }
                                    }>Remove</Button>
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
export default Favs;
