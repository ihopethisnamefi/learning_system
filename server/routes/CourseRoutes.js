const express = require("express");
const router = express.Router();
const controller = require("../controllers/CoursesController");

router.get("/courses", controller.list);
router.get("/courses/:id", controller.show);
router.post("/courses", controller.create);
router.put("/courses/:id", controller.update);
router.delete("/courses/:id", controller.remove);

module.exports  = router;