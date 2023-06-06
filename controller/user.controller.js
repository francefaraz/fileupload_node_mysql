
const userModel=require('../models/user.model')


exports.createUser=(req,res)=>{
console.log("hello kajdflk ")
    const {name,email}=req.body
     console.log(req.file,"aksfdj")
    const cv=req.file
    console.log(cv,"++++++++===")
    console.log(cv.filename)
    const cvPath='/uploads'+cv.filename;
    
    const file_path=cv.path
    console.log(file_path)
    const newUser={
        name:name,
        email:email,
        resumePath:cvPath
    }

    userModel.createUser(newUser,(err,user)=>{

        if (err)
          return res.status(400).json({error:'failed to insert data'});
        else
          return res.status(200).json(user)
    })

}


exports.getAllUsers = (req,res)=>{

    console.log("IN GET ALL USERS CONTROLLER")
    userModel.getUsers((err,users)=>{
        if (err)
        return res.status(400).json({error:"ERROR WHILE GETTING DATA"+err})
        else
          return res.status(200).json(users)
    })
}