const favs = require("../favs");

function list(request, response) {
    return response.json(favs);
}

function show(request, response) {
    let getFav = favs.find(f => {
            return String(f._id) === request.params.id;
        });
      
    return response.json(getFav);
}

function create(request, response) {
    favs.push(request.body);
    return response.json(favs);
}

function remove(request, response) {
    /*let delFav = favs.filter(f => {
        return f._id !== request.params.id;
    });*/
    for (var i= favs.length -1; i >= 0 ; --i){
        if (String(favs[i]._id) === request.params.id){
            favs.splice(i,1);
        }
    }
    return response.json(favs);
}

module.exports = {
    list,
    show,
    create,
    remove
}

/*export function remove(request, response) {
    return response.json({});
}*/