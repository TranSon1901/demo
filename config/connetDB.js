const mongoose = require("mongoose");
mongoose.connect( process.env.MONGO_DB ,{dbName: 'shop-demo'} ,)
.then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database!");
})
