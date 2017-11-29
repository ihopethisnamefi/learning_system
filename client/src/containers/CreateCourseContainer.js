import { connect } from "react-redux";
import CreateCourse from "../components/CreateCourse";
import {
  createCourse,
} from "../actions";

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: function (course) {
      dispatch(createCourse(course));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCourse);