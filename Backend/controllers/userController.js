const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let User=require('../model/userschema.js')

const registeruser= async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()

        const token=jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.cookie("token", token,{
               httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

        res.status(200).json({ message: "user added successfully", token })
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message })
        }
   }

const userlist =async (req, res) => {
    try {
        const user = await User.find()
        if (!user) {
            res.status(404).json({ message: "no user found" })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


 const userlogin =async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "invalid email" });
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {

            return res.status(400).json({ message: "invalid password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ messsage: "user logged in successfully", user:{
            name:user.name
        } ,})

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const userlogout=async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        return res.status(200).json({ messsage: "user logged out successfully" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    registeruser,
    userlist,
    userlogin,
    userlogout,
};