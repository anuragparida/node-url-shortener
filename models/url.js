const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "urls.json"
);

const getUrlsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Url {
  constructor(shortUrl, mainUrl) {
    this.shortUrl = shortUrl;
    this.mainUrl = mainUrl;
  }

  save() {
    getUrlsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getUrlsFromFile(cb);
  }
};
