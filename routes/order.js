const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/", async (req, res) => {
  try{
    const Users = await User.find();
    return res.render('order/order', {Users} );
  } catch(err){
    next(err)
  }
});

module.exports = router;