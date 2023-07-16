const Stylist = require('../models/stylist');

module.exports = {
  create
};


async function create (req, res) {
    const stylistReview = await Stylist.findById(req.params.id);
    stylistReview.reviews.push(req.body);
    try {
        //save changes made to the stylist doc
        await stylistReview.save();
    } catch (err) {
        console.log(err);
    }
    //redirect if data has been changed
    res.redirect(`/stylistReview/${stylistReview._id}`);
    }
