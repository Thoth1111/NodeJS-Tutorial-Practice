const { Pool } = require('pg');

const pool = new Pool({
    localhost: "localhost",
    user: "postgres",
    port: 5432,
    password: "railstutorial",
    database: "nodejs_tutes"
});

pool.connect(function (err, client, done) {
    if (err) {
        console.error("Error connecting to database: " + err);
    }
    console.log("Connected to database!");

    const insertUser = "INSERT INTO users (name, email, age) VALUES ('John Doe', 'johnndoe@example.com', 25)";

    client.query(insertUser, function (err, result) {
        done();
        if (err) {
            console.error("Error inserting user: " + err);
            return;
        }
        console.log("User added successfully");
    });
});