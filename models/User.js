// Define Mongoose
const mongoose = require('mongoose');


const UsernameSchema = new mongoose.Schema({
    username: String,
    unique: true,
    trim: true,
    required: 'Username is required',
}, { timestamps: true });

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

// Using mongoose.model() to compile a model based on the schema
const user = mongoose.model('User', userSchema);
const email = mongoose.model('Email', emailSchema);


// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);