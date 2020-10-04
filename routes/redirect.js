const express = require("express");

const redirectControllers = require("../controllers/redirect");
const Url = require("../models/url");

const router = express.Router();

router.get("/", (req, res, next) => {
  const shortUrl = req.originalUrl.slice(1);
  Url.fetchAll((urls) => {
    for (const url of urls) {
      if (shortUrl === url.shortUrl) res.redirect(url.mainUrl);
      else res.redirect("/");
    }
  });
});

module.exports = router;
