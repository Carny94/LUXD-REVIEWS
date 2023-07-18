var express = require('express');
var router = express.Router();


//defines the route to the controllers/stylist
const stylistCtrl = require('../controllers/stylist');
//GET/stylist
router.get('/', stylistCtrl.index);
// GET / stylist/ new
router.get('/new', stylistCtrl.new);

// Edit route
router.get('/:id/edit', stylistCtrl.edit);

//POST / stylist
router.post('/', stylistCtrl.create);

//DELETE/Stylist
router.delete('/:id', stylistCtrl.delete);

// GET /:id 
router.get('/:id', stylistCtrl.show);

// PUT /stylist/:id 
router.put('/:id', stylistCtrl.update);








module.exports = router;
