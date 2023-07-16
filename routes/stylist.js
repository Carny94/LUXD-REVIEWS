var express = require('express');
var router = express.Router();


//defines the route to the controllers/stylist
const stylistCtrl = require('../controllers/stylist');
//GET/stylist
router.get('/', stylistCtrl.index);
// GET / movies/ new
router.get('/new', stylistCtrl.new);

// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', stylistCtrl.show);
//POST / Movies
router.post('/', stylistCtrl.create);



module.exports = router;
