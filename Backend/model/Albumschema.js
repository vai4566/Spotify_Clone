const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description:{ type: String, required: true },
    bgcolor: { type: String, required: true },
    image: { type: String, required: true },
},
    { timestamps: true }
)

const Album = mongoose.model('album', albumSchema)

module.exports = Album