var sqldb=require('mysql');

var con=sqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE rashid (Personid int NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))  ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

  });



// con.connect(function(err,result){

//     if(err)
//     {
//         throw err;
//     }
//     else
//     {
//         //INSERT QUERY

//         // sql_data='INSERT INTO user (u_name,addres) VALUES ("Ahsan Shafiq","BWN")';
//         // insert_record(sql_data);

//         // DELETE QUERY

//         // sql_Data='DELETE  FROM user WHERE u_name="Rashid"';
//         // Delete_record(sql_Data);

//         // DISPLAY QUERY

//         // sql_data="SELECT COUNT(*) FROM user WHERE addres='LODHRAN' ";
//         // display_All_records(sql_data);

//         sql_data="UPDATE user SET u_name='Rashid' WHERE addres='BWN'";
//         update_records(sql_data);



//     }



// });





// Insert Query function ..
function insert_record(insert_Query){

    con.query(
    insert_Query,function(err,result)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log("Insert data...")
        }
    }
    
    );
}

// Delete Query function ..

function Delete_record(detele_query)
{
    con.query(
    detele_query,function(err,result)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("Record Deleted..");
        }
    }
    );
}

// Display All data 
function display_All_records(select_query)
{

    con.query(select_query,function(err,result,fields)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log(result);
        }

    });
}


function update_records(update_Query)
{
    con.query(update_Query,function(err,result)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log(result.affectedRows);
        }
    }
    );
}


