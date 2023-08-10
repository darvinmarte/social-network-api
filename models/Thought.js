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
    },
    userName: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Thoughts',
    },
    reaction: [Reaction]
});


const thoughtText = mongoose.model('ThoughtText', ThoughtTextSchema);


module.exports = thoughtText
