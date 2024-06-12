const express = require('express');
const Workout = require('../models/workoutModel');
const {createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout} = require('../controllers/workoutController');
const router = express.Router();
//Get all workouts 
router.get('/',getWorkouts);

//GET single workout
router.get('/:id',getWorkout);
//POST a new workout
router.post('/', createWorkout)
//Delete a workout
router.delete('/:id', deleteWorkout);
//UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;