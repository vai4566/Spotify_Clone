const { v2: cloudinary } = require('cloudinary')
const Album = require('../model/Albumschema.js')

const addalbum = async (req, res) => {
    try {
        const name = req.body.name
        const description = req.body.description
        const bgcolor = req.body.bgcolor
        const imageFile = req.file
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })

        const album = new Album({
            name,
            description,
            bgcolor,
            image: imageUpload.secure_url,
        })

        await album.save()

        res.status(200).json({ message: "album Added Succesfully" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const listalbum = async (req, res) => {
    try {
        const allalbums = await Album.find({})
        res.status(200).json({ album: allalbums })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const removealbum = async (req, res) => {
    try {
        console.log(JSON.stringify(req.params.id));
        const id = req.params.id
        await Album.findByIdAndDelete(id)
        res.status(200).json({ message: "album deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = { addalbum, listalbum, removealbum }