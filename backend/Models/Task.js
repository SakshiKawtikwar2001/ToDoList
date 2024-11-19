const mongoose = require('mongoose')
const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
},{versionKey:false})
module.exports = mongoose.model('Task',TaskSchema);