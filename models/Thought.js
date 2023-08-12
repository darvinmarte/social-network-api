// Define Mongoose
const mongoose = require('mongoose');
const Reaction = require('./Reaction')
const dayjs = require('dayjs')

const ThoughtSchema = new mongoose.Schema({
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
    type: string
    },
    reaction: [Reaction]
});


const Thought = mongoose.model('Thought', ThoughtSchema);


module.exports = Thought

