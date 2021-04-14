const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        //default to current day
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Must enter exercise type"
            },

            name: {
                type: String,
                trim: true,
                required: "Must enter a name"
            },
            duration: {
                type: Number,
                required: "Must enter a duration for the exercise"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }

    ]


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;