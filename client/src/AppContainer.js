import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadCourses} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadCourses: function () {
      dispatch(loadCourses());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
