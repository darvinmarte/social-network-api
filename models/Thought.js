// Define Mongoose
const mongoose = require('mongoose');


const thoughtTextSchema = new mongoose.Schema({
    Thought: { 
        type: string,
        min: 1,
        max: 128,
        required: true,
        }
});

const createdAt = new mongoose.Schema({
    timestamps: {
        type: Date,
        createdAt: 'created_at', // Use `created_at` to store the created date
      }

});



const thoughtText = mongoose.model('thoughtText', thoughtTextSchema);

module.exports = thoughtText
