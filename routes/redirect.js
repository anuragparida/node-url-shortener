const express = require("express");

const redirectControllers = require("../controllers/redirect");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.originalUrl.slice(1) === "sasa") {
    res.redirect("https://www.google.com");
  } else {
    next("router");
  }
});
//if not found then next('route')

module.exports = router;
