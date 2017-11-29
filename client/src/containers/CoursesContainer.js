import { connect } from "react-redux";
import Courses from "../components/Courses";
import {
  saveFavs
} from "../actions";


function mapStateToProps(state) {
  return {
    courses: state.courses,
    nameFilter : state.searchText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      saveFavs: function (fav) {
          dispatch(saveFavs(fav));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);
