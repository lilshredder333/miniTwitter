const mongoose = require('mongoose')

const whistleSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    }, 
    title:{
        type: String, 
        required: true
    },
    textContent:{
        type: String,
        required: true,
    }, 
    date:{
        type: Date, 
        required: true, 
        default: Date.now
    }, 
    image:{
        type: String
    }

})  

module.exports = mongoose.model('Whistle', whistleSchema)