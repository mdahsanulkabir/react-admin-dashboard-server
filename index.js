const express = require('express');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());

const cmhRoutes = require('./routes/cmhRoutes');

//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api',cmhRoutes);

//welcome route
app.get("/", (req, res) => {
    res.send("Hello");
})


//Database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wdeducl.mongodb.net/?retryWrites=true&w=majority`, { dbName: "cmh" })
    .then(() => {
        console.log('connected to db');
    })
    .catch((error) => {
        console.log(error);
    })


//start Server
app.listen(port, () => {
    console.log("CMH server is running on port ", port);
})
