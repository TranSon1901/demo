const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  return res.render('product/product');
});

router.post('', function(req, res) {
  // Your code here
});


module.exports = router;