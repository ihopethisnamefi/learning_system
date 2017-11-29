const courses = require("../courses");

function list(request, response) {
    return response.json(courses);
}

function show(request, response) {
    let getCourse = courses.find(c => {
            return String(c._id) === request.params.id;
        });
      
    return response.json(getCourse);
}

function create(request, response) {
    courses.push(request.body);
    return response.json(courses);
}

function update(request, response) {
    let getCourse = courses.find(c => {
        return String(c._id) === request.params.id;
    });
    getCourse._id = request.body._id;
    getCourse.name = request.body.name;
    getCourse.subject = request.body.subject;
    getCourse.length = request.body.length;

    return response.json(getCourse);
}

function remove(request, response) {
    for (var i= courses.length -1; i >= 0 ; --i){
        if (String(courses[i]._id) === request.params.id){
            courses.splice(i,1);
        }
    }
    return response.json(courses);
}

module.exports = {
    list,
    show,
    create,
    update,
    remove
}

/*export function remove(request, response) {
    return response.json({});
}*/