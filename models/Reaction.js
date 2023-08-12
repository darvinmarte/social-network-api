//  do not need the mongoose.model
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const mongoose = require('mongoose');
const dayjs = require('dayjs')

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
        default: Date.now(),
        get: time => dayjs().format('DD/MM/YYYY')
    },
    // Use a getter method to format the timestamp on query

})

module.exports = Reaction