const express = require("express");
const home = require("./routes/home");

const app = express();
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));

// app.use("/", home);
app.get("/", (req, res) => {
  return res.render("home");
});

const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));