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
        var splitString = array[i].split(" ");
        var Obj = {
            _id: Number(splitString[0]),
            name: splitString[1],
            length: Number(splitString[2]),
            subject: splitString[3]
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

