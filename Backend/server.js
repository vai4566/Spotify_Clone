require('dotenv').config({ quiet: true })
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js')
const songrouter = require('./routes/songroute.js')
const connectCloudinary = require('./config/cloudinary.js')
const albumrouter=require('./routes/albumroute.js')
const userrouter=require('./routes/userroute.js')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//routes
app.use("/song", songrouter)
app.use("/album", albumrouter)
app.use("/user", userrouter)

const port = process.env.PORT || 4000
connectDB()
    .then(() => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log("Server is running on", port)
        })
    }
    )

    connectCloudinary()