const express = require("express");
const bodyParser = require("../node_modules/body-parser");
const coursesRoutes = require("./routes/CourseRoutes");
const favsRoutes = require("./routes/FavRoutes");

const app = express();
app.use(bodyParser.json());
app.use(coursesRoutes);
app.use(favsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
