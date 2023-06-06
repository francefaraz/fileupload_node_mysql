const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{

        console.log("FILE IS ",file)
        const extension = file.originalname.split('.').pop();
        cb(null,file.originalname)
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // const extension = file.originalname.split('.').pop();
        // cb(null, 'cv-' + uniqueSuffix + '.' + extension);
    }})

    const file_upload=multer({storage})
    module.exports=file_upload;

