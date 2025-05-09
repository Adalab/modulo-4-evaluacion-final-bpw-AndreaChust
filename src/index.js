
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require('dotenv').config();


const server = express();

async function getDBconnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    
    connection.connect();
    return connection;
}

server.use(cors());
server.use(express.json());

const port = process.env.PORT || 5001;

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

    connection.end();
    res.status(201).json({
        success: true,
        id: result.insertId
    })
});

server.put("/api/fish/:id", async (req, res) => {
    const connection = await getDBconnection();
    const { id } = req.params;
    const { name, scientific_name, depth_range, behavior } = req.body;
    const sqlQuery = "UPDATE fishes SET name = ?, scientific_name = ?, depth_range = ?, behavior = ? WHERE id = ?"; 
    const [result] = await connection.query(sqlQuery, [name, scientific_name, depth_range, behavior, id]);
    console.log(result);
    
    connection.end();
    res.status(200).json({
        success: true,
        id: result.insertId
    });
});

server.delete("/api/fish/:id", async (req, res) => {
    const connection = await getDBconnection();
    const { id } = req.params;
    const sqlQuery = "DELETE FROM fishes WHERE id = ?";
    const [result] = await connection.query(sqlQuery, [id]);

    connection.end();
    res.status(200).json({
        status: "success",
        message: "Removed resource"
    })
})

