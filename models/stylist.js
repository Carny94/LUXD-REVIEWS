const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
 
    content:{
        type: String,
        required: true
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
      },

      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    
    }, {
      timestamps: true
    });

const createStylistSchema = new Schema ({

        instagram: {
            type: String,
            required: true,
            unique: true
        },

        artistryType: {
            type: String,
            enum:['Makeup', 'Hair', 'Photography']
        },
        recommended: {
            type: Boolean
        }, 
        reviews: [reviewSchema]
    }, {
        timestamps: true
  
});

module.exports = mongoose.model('Stylist', createStylistSchema);
