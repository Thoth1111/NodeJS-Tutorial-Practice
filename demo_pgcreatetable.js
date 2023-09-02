const { Pool } = require('pg');

const pool = new Pool({
    localhost: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "nodejs_tutes"
})

pool.connect(function (err, client, done) {
    if (err) {
        console.error("Error connecting to database: " + err);
        return;
    };
    console.log("Connected to database!");

    const createUserTable = "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50), age INT)";

    client.query(createUserTable, function (err, result) {
        done();
        if (err) {
            console.error("Error creating table: " + err);
            return;
        }
        console.log("Table created successfully");
    });
});