const { registeruser, userlist, userlogin, userlogout, }=require('../controllers/userController.js')
const userrouter=require('express').Router()

userrouter.post('/register', registeruser)
userrouter.get('/list', userlist)
userrouter.post('/login', userlogin)
userrouter.post('/logout', userlogout)

module.exports= userrouter
