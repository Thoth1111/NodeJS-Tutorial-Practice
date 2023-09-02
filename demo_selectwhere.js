const { Pool } = require('pg');

const pool = new Pool({
    localhost: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "nodejs_tutes"
});

pool.connect(function (err, client, done) {
    if (err) {
        console.error("Error connecting to database: " + err);
    }
    console.log("Connected to database!");

    const selectUser = "SELECT * FROM users WHERE name = 'John Doe'";

    client.query(selectUser, function (err, result) {
        done();
        if (err) {
            console.error("Error selecting user: " + err);
            return;
        }
        console.log(result.rows);
    });
});