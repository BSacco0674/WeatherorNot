const express = require("express");
const router = express.Router();
const cityCtrl = require("../controllers/city");

router.post("/", checkAuth, cityCtrl.create);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
