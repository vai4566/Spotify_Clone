const { addsong, listsong, removesong }=require('../controllers/songController.js')
const songrouter=require('express').Router()
const upload=require('../middleware/multer.js')

songrouter.post('/add',upload.fields([{name:'image', maxCount:1}, {name:'audio', maxCount:1}]), addsong)
songrouter.get('/list', listsong)
songrouter.delete('/remove/:id', removesong)

module.exports= songrouter
