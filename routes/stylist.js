var express = require('express');
var router = express.Router();


//defines the route to the controllers/stylist
const stylistCtrl = require('../controllers/stylist');
// GET / movies/ new
router.get('/new', stylistCtrl.new);
//POST / Movies
router.post('/', stylistCtrl.create);

//create a show route 

module.exports = router;
