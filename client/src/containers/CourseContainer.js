import { connect } from "react-redux";
import Course from "../components/Course";
import {getCourse} from "../actions";

function mapStateToProps(state) {
  return {
    course: state.course
  };
}

function mapDispatchToProps(dispatch){
    return {
      getCourse:function(course){
            let action = getCourse(course);
            dispatch(action);
          },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Course);
