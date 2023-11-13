/*Import */
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

/*import route */
const home = require("./routes/home");
const about = require("./routes/about");
const order = require("./routes/order");
const product = require("./routes/product");
const upload = require("./routes/upload");
const signup = require("./routes/signup");
const user = require("./routes/user");

const app = express();
require("./config/connetDB");

/*set json body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.urlencoded({extended: true,}));

/* Set Templating Engine */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 
 

/*Static Files */ 
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/*Layout ejs */
app.use(expressLayouts);
app.set('layout', './layouts/layout');

/*Routes */ 
app.use("/", home);
app.use("/order", order);
app.use("/upload", upload);
app.use("/product", product);
app.use("/signup", signup);
app.use("/user", user);

/*Listen on Port*/
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));