const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const createStylistSchema = new Schema ({

        instagram: {
            type: String,
            required: true,
            unique: true
        },

        artistryType: {
            type: string,
            enum:[Makeup, Hair, Photography]
        },
        recommended: {
            type: Boolean
        }
});

module.exports = mongoose.model('style', createStylistSchema);
