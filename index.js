const express = require("express");
const home = require("./routes/home");
const about = require("./routes/about");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "public"));

app.use("/", home);
app.use("/about", about);


const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));