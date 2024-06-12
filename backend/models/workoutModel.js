const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Enter a title: ']
    },
    reps:{
        type: Number,
        required: [true, 'Enter no of reps: ']
    },
    load: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);