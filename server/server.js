require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json())

// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.json({
        status: 'success',
        data: {
            restaurant: ['McDonalds', 'subway']
        }
    });
})

// Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    res.json({
        status: 'success',
        data: {
            restaurant: ['McDonalds', 'subway']
        }
    });
})

// Create new restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.json({
        status: 'success',
        data: {
            restaurant: ['McDonalds', 'subway']
        }
    });
})

// Update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.json({
        status: 'success',
        data: {
            restaurant: ['McDonalds', 'subway']
        }
    });
})

// Delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body)
    res.json({
        status: 'success',
        data: {
            restaurant: ['McDonalds', 'subway']
        }
    });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})

