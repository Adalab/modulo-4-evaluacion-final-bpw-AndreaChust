
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server = express();

async function getDBconnection() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "SantoySeña31",
        database: "IndoAquarium"
    });
    connection.connect();
    return connection;
}

server.use(cors());
server.use(express.json());

const port = 5001;
server.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port}`)
});

server.get("/api/fishes", async (req, res) => {
    const connection = await getDBconnection();
    const sqlQuery = "SELECT * FROM fishes";
    const [fishesResult] = await connection.query(sqlQuery);

    connection.end();

    res.status(200).json({
        info: {
            count: fishesResult.length
        },
        results: fishesResult
    });
});

server.post("/api/fish", async (req, res) => {
    const connection = await getDBconnection();
    const { name, scientific_name, depth_range, behavior } = req.body;

    const sqlQuery = "INSERT INTO fishes (name, scientific_name, depth_range, behavior) VALUES(?, ?, ?, ?)";
    const [result] = await connection.query(sqlQuery, [
        name,
        scientific_name,
        depth_range,
        behavior
        
    ])

    res.json({})
})

