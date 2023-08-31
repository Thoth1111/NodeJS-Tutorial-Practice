const mysql = require('mysql');

const con =  mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password"
});

con.connect(function (err) {
    if (err) {
        console.error("Error connecting to database: " + err);
        return;
    };
    
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS nodejs_tutes", function (err, result) {
        if (err) {
            console.error("Error creating database: " + err);
        }
        console.log("Database created");
        con.end();
    });
});