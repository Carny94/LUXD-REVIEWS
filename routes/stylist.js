var express = require('express');
var router = express.Router();


//defines the route to the controllers/stylist
const stylistCtrl = require('../controllers/stylist');
//GET/stylist
router.get('/', stylistCtrl.index);
// GET / movies/ new
router.get('/new', stylistCtrl.new);

// Edit route
router.get('/:id/edit', stylistCtrl.edit);

//POST / Movies
router.post('/', stylistCtrl.create);

//DELETE/Stylist
router.delete('/:id', stylistCtrl.delete);

// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', stylistCtrl.show);




//put




module.exports = router;
