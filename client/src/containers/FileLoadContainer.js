import { connect } from "react-redux";
import FileLoad from "../components/FileLoad";
import {
    uploadDocumentRequest,
  } from "../actions";


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
    return {
        uploadDocumentRequest: function (file ) {
            dispatch(uploadDocumentRequest(file));
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(FileLoad);