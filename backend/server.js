const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts.js')
//express app
const app = express();
app.use(cors());
//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts',workoutRoutes);
//connect to db
mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>{
        //listen for requests
        app.listen(port, ()=>{
            console.log(`Connected to db and Listening on port ${port}`);
        });
    })
    .catch((error)=>{
        console.log(error)
    })
port = process.env.PORT || 4001;
