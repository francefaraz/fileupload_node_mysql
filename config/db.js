const mysql=require('mysql2')

const connections=mysql.createConnection(
    {host:'localhost',
    user:'root',
    password:'',
    database:'test'

})


connections.connect();
console.log("connected")
connections.query(
    'SELECT * FROM `test`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );
module.exports=connections;