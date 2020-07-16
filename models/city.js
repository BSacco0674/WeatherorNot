const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
    City: {
        type: String,
        required: true

    },
    Country: {
        type: String,
        required: true
    },
   
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('City', citySchema)