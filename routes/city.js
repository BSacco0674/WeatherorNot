const express = require('express');
const router = express.Router();
const cityCtrl = require('../controllers/city');



router.post('/', cityCtrl.create)






module.exports = router;