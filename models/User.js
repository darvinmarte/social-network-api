// Define Mongoose
const mongoose = require('mongoose');


const UsernameSchema = new mongoose.Schema({
    username: String,
    unique: true,
    trim: true,
    required: 'Username is required',
});

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

const thoughtsSchema = new mongoose.Schema({
    thoughtBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Thoughts'},
})

const friendsSchema = new mongoose.Schema({
    friend: {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'},
})


// Using mongoose.model() to compile a model based on the schema
const user = mongoose.model('User', userSchema);
const email = mongoose.model('Email', emailSchema);
const thoughts = mongoose.model('Thoughts', thoughtsSchema);
const friend = mongoose.model('Friends', friendsSchema);

