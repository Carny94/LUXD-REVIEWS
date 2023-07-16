const express = require('express');
const router = express.Router();
//require route to --> reviews/controller
const reviewsCtrl = require('../controllers/reviews');


router.post('/stylist/:id/reviews', reviewsCtrl.create);


module.exports = router;