const express = require("express");
const home = require("./routes/home");
const about = require("./routes/about");

const app = express();
app.set('view engine', 'ejs');
app.set("views","./views");

app.use(express.json());
app.use("/", home);
app.use("/about", about);


const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));