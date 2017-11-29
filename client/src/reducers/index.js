import {combineReducers} from "redux";

function courses(state = [], action) {
  if (action.type === "COURSES_LOADED") {
    return action.value;
  }
  return state;
}


function course(state = [], action) {
  if (action.type === "GET_COURSE_DONE") {
    return action.value;
  }
  return state;
}

function searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function favs(state = [], action) {
  if (action.type === "FAVS_LOADED") {
    return action.value;
  }
  return state;
}




const rootReducer = combineReducers({
  courses,course,searchText,favs
});
export default rootReducer;
