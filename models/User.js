// Define Mongoose
const mongoose = require('mongoose');


const UsernameSchema = new mongoose.Schema({
    username:{ 
    type: string,
    unique: true,
    trim: true,
    required: true,
    }
});

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

const thoughtsSchema = new mongoose.Schema({
    thoughtBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Thoughts'},
})

const friendsSchema = new mongoose.Schema({
    friend: {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'},
})


// Using mongoose.model() to compile a model based on the schema
const User = mongoose.model('User', userSchema);
const Email = mongoose.model('Email', emailSchema);
const Thoughts = mongoose.model('Thoughts', thoughtsSchema);
const Friend = mongoose.model('Friends', friendsSchema);

module.exports = User, Email, Thoughts, Friend