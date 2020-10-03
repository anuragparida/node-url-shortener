const express = require("express");

const redirectControllers = require("../controllers/redirect");

const router = express.Router();

router.get("/", () => {
  if (1 === 1) {
    return redirectControllers.getRedirect;
  } else {
  }
});
// TODO: redirect to set website
//if not found then next('route')

module.exports = router;
