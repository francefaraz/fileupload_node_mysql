const db=require('../config/db')

exports.createUser=(newUser,callBack)=>{
db.query('INSERT INTO users SET ?', newUser,(err ,result)=>{
    if (err)
       callBack(err,null)
    newUser.id=result.id
    callBack(null,newUser)
})
}


exports.getUsers=(callBack)=>{
    db.query('SELECT * FROM users',(err,results)=>{
        if (err){
         callBack(err,null)
        }
        callBack(null,results)
    })
}