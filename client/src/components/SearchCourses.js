import React from 'react';
import {Input} from "semantic-ui-react";

function SearchCourses(props) {
  return (
      <div>
        <center>
        <h1>Course Search</h1>
        Search Courses:
        <Input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
        </center>
      </div>
  );
}

export default SearchCourses;