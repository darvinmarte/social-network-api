// Define Mongoose
const mongoose = require('mongoose');


const thoughtTextSchema = new mongoose.Schema({
    Thought:{ 
        type: string,
        min: 1,
        max: 128,
        required: true,
        }
});

const user = mongoose.model('User', userSchema);
