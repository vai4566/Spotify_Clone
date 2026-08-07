const mongoose=require('mongoose')

const uri=process.env.MONGO_URI

const connectDB= ()=>{ 
 return mongoose.connect(uri)
}
 module.exports=connectDB
