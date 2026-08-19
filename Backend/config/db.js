const mongoose=require('mongoose')

const uri=process.env.MONGO_URI || "mongodb://localhost:27017/Spotify"

const connectDB= async ()=>{ 
 await mongoose.connect(uri)
}
 module.exports=connectDB
