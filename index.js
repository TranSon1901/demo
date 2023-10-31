/*Import */
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const path = require('path');

const home = require("./routes/home");
const about = require("./routes/about");

const app = express();
app.use(express.json());

/* Set Templating Engine */
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/*Static Files */ 
app.use(express.static(__dirname + "public"));
app.use('/assets', express.static(path.join(__dirname, 'public')))

/*Layout ejs */
app.use(expressLayouts);
app.set('layout', './layouts/layout');

/*Routes */ 
app.use("/", home);
app.use("/", about);

/*Listen on Port*/
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));