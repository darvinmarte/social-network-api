// Define Mongoose
const mongoose = require('mongoose');


const ThoughtTextSchema = new mongoose.Schema({
    Thought: {
        type: string,
        min: 1,
        max: 128,
        required: true,
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
});


const thoughtText = mongoose.model('ThoughtText', ThoughtTextSchema);


module.exports = thoughtText
