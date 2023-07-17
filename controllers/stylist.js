const  Stylist  = require('../models/stylist');

// const Review = require('../models/stylist');

module.exports = {
    new: newStylist,
    create,
    index,
    show,
    delete: deleteStylist,
    edit
  };

async function edit(req, res) {
  const stylist = await Stylist.findById(req.params.id);
  res.render('stylist/edit', { stylist });

}

  async function deleteStylist(req, res) {
    await Stylist.findOneAndDelete({ _id: req.params.id });
    res.redirect('/stylist');
  }

async function index (req, res) {
  const showAllStylist = await Stylist.find({});
  res.render('stylist/index', { title: 'All Stylist', showAllStylist });
};


async function show (req, res) {
  const stylist = await Stylist.findById(req.params.id);
  console.log(stylist)
 // Define showAllStylist variable
  // const reviews = await Review.find({ stylist: req.params.id });
 res.render('stylist/show', { title: 'Stylist Detail', stylist });
} 


  async function create (req, res) {
    console.log('create')
    req.body.recommended = !!req.body.recommended;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
   try {
    const stylist = await Stylist.create(req.body);
    res.redirect(`/stylist/${stylist._id}`);
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