const express = require("express");
const router = express.Router();
const controller = require("../controllers/FavsController");

router.get("/favs", controller.list);
router.get("/favs/:id", controller.show);
router.post("/favs", controller.create);
router.delete("/favs/:id", controller.remove);

module.exports  = router;