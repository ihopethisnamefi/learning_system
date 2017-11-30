const multer = require("../../node_modules/multer");
const csv = require("../../node_modules/csvtojson");
const fs = require("fs");
const glob = require("glob");

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./server");
    },
    filename: function(req, file, callback) {
        //callback(null,Date.now() + "_" + file.originalname);
        callback(null,"courses.txt");
    }
  });
  
  
  var upload = multer({
    storage: Storage
  }).array("file", 3); //Field name and max count

function create(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!" + err);
        }
        var Objarray = [];
        var array = fs.readFileSync('./server/courses.txt').toString().split("\n");
        for(var i in array) {
        
        //Begin split logic, since name is allowed to have spaces and files are space delimited. 
        var splitString = array[i].split(" ");
        var splitSubject = array[i].substring(array[i].lastIndexOf(" ") + 1);
        var rest = array[i].substring(0, array[i].lastIndexOf(" ") + 1);
        var splitLength = rest.substring(rest.lastIndexOf(" ") - 1, rest.length);
        var nextRest = rest.substring(0, rest.lastIndexOf(" ") - 2);
        var splitId = nextRest.substr(0, nextRest.indexOf(" "));
        var splitName = nextRest.substr(nextRest.indexOf(" ") + 1);
        console.log(splitName);
        var Obj = {
            _id: Number(splitId),
            name: splitName,
            length: Number(splitLength),
            subject: splitSubject
        }
        var jsonString = JSON.stringify(Obj);
        //console.log("TEST" + Obj._id);
        Objarray.push(jsonString);
    }
    var coursesArray = "module.exports  =  [" + Objarray + "];";
        //console.log("TEST" + Objarray);
       fs.writeFile("./server/courses.js", coursesArray, function(err) {
                if(err) {
                    return console.log(err);
                }

                fs.unlink("./server/courses.txt", (err) => {
                    if (err) throw err;
                    console.log('successfully deleted file');
                  });
                console.log("The file was saved!");
        }); 
    

        return res.end("File uploaded sucessfully!.");
    });
  }



module.exports = {

    create,

}

