const  Stylist  = require('../models/stylist');

module.exports = {
    new: newStylist,
    create
    
  };

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