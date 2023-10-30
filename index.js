const express = require("express");
const home = require("./routes/home");

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set("views","./views");

// app.use("/", home);
app.get("/", (req, res, next) => {
  return res.render("chào", {title:"an", name:"teo"})
  // return res.render('home');
});

const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));