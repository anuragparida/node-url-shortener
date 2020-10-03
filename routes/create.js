const express = require("express");

const createControllers = require("../controllers/create");

const router = express.Router();

router.get("/", createControllers.getCreate);

router.post("/create", createControllers.saveUrl);

module.exports = router;
