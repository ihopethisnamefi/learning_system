import { connect } from "react-redux";
import EditCourse from "../components/EditCourse";
import {
  updateCourse,
} from "../actions";

function mapStateToProps(state) {
  return {
    course: state.course,
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCourse: function (course) {
      dispatch(updateCourse(course));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCourse);