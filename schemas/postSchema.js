const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema ({
    photo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('postModel', postSchema)