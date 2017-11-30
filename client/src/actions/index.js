export function loadCourses() {
  return function (dispatch) {
    fetch("/courses")
    .then( (response) => {
      return response.json();
    }).then((courses) => {
      dispatch(coursesLoaded(courses));
    });
  };
}
function coursesLoaded(courses) {
  return {
    type: "COURSES_LOADED",
    value: courses
  };
}

export function getCourse(id) {
  return function (dispatch) {
    fetch("/courses/" + id)
    .then( (response) => {
      return response.json();
    }).then((course) => {
      dispatch(getCourseDone(course));
    });
  };
}
function getCourseDone(course) {
  return {
    type: "GET_COURSE_DONE",
    value: course
  };
}

export function createCourse(c) {
  return function (dispatch) {
    fetch("/courses", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadCourses()));
  };
}

export function updateCourse(c) {
  return function (dispatch) {
    fetch("/courses/" + c._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadCourses()));
  };
}

export function setSearchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value:txt
  };
}

export function loadFavs() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_FAVS"
    });
    fetch("/favs")
    .then( (response) => {
      return response.json();
    }).then((favs) => {
      dispatch(favsLoaded(favs));
    });
  };
}

export function favsLoaded(favs) {
  return {
    type: "FAVS_LOADED",
    value: favs
  };
}


export function saveFavs(fav) {
  return function (dispatch) {
    fetch("/favs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fav)
    }).then(() => dispatch(loadFavs()));
  };
}

export function removeFav(id) {
  return function (dispatch) {
    fetch("/favs/" + id, {
      method: "DELETE"
    }).then(() => dispatch(loadFavs()));
  };
}

export function uploadSuccess(data) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    value: data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    value: error,
  };
}

export function uploadDocumentRequest(file ) {  
  //console.log(file);
  //let data = new FormData();
  //data.append("file", file);

  var form = new FormData();
  form.append("file", file.files[0]);
  
  /*const request = fetch("/files", {
    method: "POST",
    body: form
  })

  return (dispatch) => {
    function onSuccess(success){
      dispatch({ type:'UPLOAD_DOCUMENT_SUCCESS',payload:success});
      return success;
    }

    function onError(error){
      dispatch({type:'UPLOAD_DOCUMENT_FAIL',error });
      return error;
    }

    request.then(success => onSuccess, error => onError);
  }*/
  return function (dispatch) {
    fetch("/files", {
      method: "POST",
      body: form
    })
    .then(response => dispatch(uploadSuccess(response)))
  };
}

