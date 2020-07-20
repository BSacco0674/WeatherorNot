const express = require("express");
const router = express.Router();
const cityCtrl = require("../controllers/city");
router.use(require('../config/auth'));
router.post("/", checkAuth, cityCtrl.create);
router.get('/', checkAuth, cityCtrl.getAll)
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
module.exports = router;