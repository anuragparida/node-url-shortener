const Url = require("../models/url");

exports.getCreate = (req, res, next) => {
  res.render("create");
};

exports.saveUrl = (req, res, next) => {
  const shortUrl = req.body.shortUrl;
  const mainUrl = req.body.mainUrl;
  const url = new Url(shortUrl, mainUrl);
  url.save();
  res.redirect("/");
};
