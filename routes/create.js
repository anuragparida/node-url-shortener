const express = require("express");

const createControllers = require("../controllers/create");

const router = express.Router();

router.get("/", createControllers.getCreate);

module.exports = router;
