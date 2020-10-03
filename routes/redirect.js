const express = require("express");

const redirectControllers = require("../controllers/redirect");
const Url = require("../models/url");

const router = express.Router();

router.get("/", (req, res, next) => {
  const shortUrl = req.originalUrl.slice(1);
  Url.fetchAll((products) => {
    console.log(products);
    console.log(shortUrl);
    const shortUrlArray = products.map((entry) => entry.shortUrl);
    console.log(shortUrlArray);
    console.log(shortUrlArray[shortUrl]);
    if (shortUrlArray[shortUrl] != undefined) {
      console.log("reached");
      res.redirect("https://www.google.com");
    } else {
      res.redirect("/");
      //Give explanation as to the url not being found?
    }
  });
});

module.exports = router;
