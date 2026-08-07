const {addalbum, listalbum, removealbum}=require('../controllers/albumcontroller.js')
const albumrouter=require('express').Router()
const upload=require('../middleware/multer.js')


albumrouter.post('/add',upload.single('image'), addalbum)
albumrouter.get('/list', listalbum)
albumrouter.delete('/remove/:id', removealbum)

module.exports= albumrouter