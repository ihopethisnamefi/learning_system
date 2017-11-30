const express = require("express");
const router = express.Router();
const controller = require("../controllers/FilesController");

router.post("/files", controller.create);


module.exports  = router;