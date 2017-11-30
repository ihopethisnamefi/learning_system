import Main from "../components/Main";
import { connect } from "react-redux";
import {loadCourses} from "../actions";



function mapDispatchToProps(dispatch) {
  return {
    loadCourses: function () {
      dispatch(loadCourses());
    },
  };
}

export default connect(null,mapDispatchToProps)(Main);
