var sql=require('mysql');
var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testdb"

});

// con.connect(function(err,result)
// {
//     if(err){
//         throw err;
//     }
//     else
//     {
//         console.log("Connected..");
//     }
//     con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))",function(err,res){
//         if(err)
//         {
//             throw err;
//         }
//         else{
//             console.log("Database Created..!");
//         }
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE datas (name VARCHAR(255), address VARCHAR(255))";
//     // con.query(sql, function (err, result) {
//     //   if (err) throw err;
//     //   console.log("Table created");
//     // });
//     Creat_table(sql);
//   });



// function Creat_table(string_query)
// {
//     con.query(string_query,function(err,result){
//         if(err)
//         {
//             throw err;
//         }
//         else
//         {
//             console.log("Table Created...")
//         }
//     });
// }

// // module.exports=conected;