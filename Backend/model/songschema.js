const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    image: { type: String, required: true },
    file: { type: String, required: true },
    duration: { type: String, required: true },
},
    { timestamps: true }
)

const Song = mongoose.model('song', songSchema)

module.exports = Song