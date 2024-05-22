const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)