//Destructured import for client object in pg module
const { Pool } = require('pg');
//create a Pool object (collection of database connections aka clients)
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "postgres"
});
//connect to the pool
pool.connect(function (err, client, done) {
    if (err) {
        console.error("Error connecting to database: " + err);
        return;
    };
    console.log("Connected to database!");

    //create a table
    const createDatabase = "CREATE DATABASE nodejs_tutes";

    client.query(createDatabase, function (err, result) {
        //call the done() method to release the client back to the pool
        done();
        if (err) {
            console.error("Error creating database: " + err);
            return;
        }
        console.log("Database created successfully");
    });
});


