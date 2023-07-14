var express = require('express');
var router = express.Router();


//defines the route to the controllers/stylist
const stylistCtrl = require('../controllers/stylist');

router.get('/new', stylistCtrl.new);
router.post('/', stylistCtrl.create);

module.exports = router;
