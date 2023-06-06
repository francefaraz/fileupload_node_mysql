
const userControllers=require('../controller/user.controller')
const express=require('express')
const file_upload=require('../middlewares/file.upload')
const router=express.Router()

router.post('/insert',file_upload.single('cv'), userControllers.createUser)

router.get('/getusers',userControllers.getAllUsers)


module.exports=router;