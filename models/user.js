const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    id: String,
   
    displayName: String,
   
    email: String,
    
    picture: String,
    
    facebook: {
   
        id: String,
   
        token: String
   
    },
   
    games: [{
   
        id: Number,
   
        questions: [{
    
            id: Number,
    
            response: Number,
    
            score: Boolean,
    
            time: Number
    
        }],
    
        time: Number,
    
        score : Number
    
    }],
   
    questions: [Number]

});
const User = mongoose.model('User', userSchema);
module.exports = User;