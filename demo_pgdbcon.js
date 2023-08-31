//Destructured import for pool object in pg module
const { Pool } = require('pg');

const con = new Pool({
    host: "localhost",
    user: "postgres",
    password: "railstutorial",
    //for initial connection, the db should be specified
    database: "postgres"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //create a database using the client object
    con.query("CREATE DATABASE nodejs_tutes", function (err, result) {
        //call the done() method to release the client back to the pool
        if (err) throw err;
        console.log("Database created");
        //end the connection
        con.end();
    });
});