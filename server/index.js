const express = require("express");
const bodyParser = require("../node_modules/body-parser");
const coursesRoutes = require("./routes/CourseRoutes");
const favsRoutes = require("./routes/FavRoutes");
const multer = require("../node_modules/multer");
const filesRoutes = require("./routes/FileRoutes");

const app = express();
app.use(bodyParser.json());
app.use(coursesRoutes);
app.use(favsRoutes);
app.use(filesRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
