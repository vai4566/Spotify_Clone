const{ v2: cloudinary} =require('cloudinary')
const Song=require('../model/songschema.js')

const addsong = async(req,res)=>{
    try{
const name=req.body.name
const artist=req.body.artist
const album=req.body.album
const audioFile=req.files.audio[0]
const imageFile=req.files.image[0]
const audioUpload= await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"})
const imageUpload= await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
const duration=`${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`

const songData = new Song({
  name,
 artist,
  album,
  image: imageUpload.secure_url,
  file: audioUpload.secure_url,
  duration
})

const song= new Song(songData)
await song.save()

res.status(200).json({message:"Song Added Succesfully"})
    }
    catch(error){
res.status(500).json({message:error.message})
    }
}

const listsong=async(req,res)=>{
try {
    const allsongs= await Song.find({})
    res.status(200).json({songs:allsongs})
} catch (error) {
    res.status(404).json({message:error.message})
}
}

const removesong=async(req,res)=>{
    try {
        const id=req.params.id
await Song.findByIdAndDelete(id)
res.status(200).json({message:"song deleted successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports={addsong, listsong, removesong}