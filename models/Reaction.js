//  do not need the mongoose.model
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const mongoose = require('mongoose');

const Reaction = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new ObjectId
    },
    reactionBody:{
        type: string,
        required: true,
        max: 280
    },
    userName: {
        type: string,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now()
    },
    // Use a getter method to format the timestamp on query
})

