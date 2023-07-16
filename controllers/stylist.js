const  Stylist  = require('../models/stylist');
const allStylist = require('../models/stylist');
// const Review = require('../models/stylist');

module.exports = {
    new: newStylist,
    create,
    index,
    show
  };

async function index (req, res) {
  const showAllStylist = await allStylist.find({});
  res.render('stylist/index', { title: 'All Stylist', showAllStylist });
};


async function show (req, res) {
  const stylist = await Stylist.findById(req.params.id).populate('artistryType');
  const showAllStylist = await allStylist.find({}); // Define showAllStylist variable
  // const reviews = await Review.find({ stylist: req.params.id });
 res.render('stylist/show', { title: 'Stylist Detail', stylist, showAllStylist });
} 


  async function create (req, res) {
    req.body.recommended = !!req.body.recommended;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
   try {
    const stylist = await Stylist.create(req.body);
    res.redirect(`/stylist/${stylist.id}`);
   } catch (err) {
    console.log(err);
    res.render('stylist/new', { errorMsg: err.message});
   }
}


   function newStylist (req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
  res.render('stylist/new', { errorMsg: '' });
  }