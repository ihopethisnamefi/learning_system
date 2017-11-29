import { connect } from "react-redux";
import Favs from "../components/Favs";
import {
    removeFav
  } from "../actions";

function mapStateToProps(state) {
  return {
    favs: state.favs,
  };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFav: function (id) {
            dispatch(removeFav(id));
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Favs);
