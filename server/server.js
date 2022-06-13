require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const db = require('./db')

app.use(express.json())

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
        res.json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        });
    } catch(err) {
        console.log(err)
    }
})

// Get one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query('select * from restaurants where id = $1', [req.params.id]);
        res.json({
            status: 'success',
            data: {
                restaurants: results.rows[0]
            }
        });
    } catch(err) {
        console.log(err)
    }
})

// Create new restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        console.log('success');
        const results = await db.query(
            'INSERT INTO restaurants(name, location, price_range) values ($1, $2, $3) returning *',
            [req.body.name,
                req.body.location,
                req.body.price_range]);
        res.json({
            status: 'success',
            data: {
                restaurants: results.rows[0]
            }
        });
    } catch(err) {
        console.log(err)
    }
})

// Update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log('success');
        const results = await db.query(
            'UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *',
            [req.body.name,
                req.body.location,
                req.body.price_range,
                req.params.id]);
        res.status(204).json({
            status: 'success'
        })
    } catch(err) {
        console.log(err)
    }
})

// Delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log('success');
        const results = await db.query('DELETE FROM restaurants where id = $1',
            [req.params.id]);
        res.json({
            status: 'success',
            data: {
                restaurants: results.rows[0]
            }
        });
    } catch(err) {
        console.log(err)
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})

