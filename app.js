const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const redirectRoutes = require("./routes/redirect");
const createRoutes = require("./routes/create");
const errorController = require("./controllers/error");

app.use("/:url", redirectRoutes);
app.use(createRoutes);
app.use(errorController.get404);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
