const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render('signup/signup');
});

module.exports = router;