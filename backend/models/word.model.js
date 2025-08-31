import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
    text: {
        type : String, 
        required: true, 
        unique : true, 
        trim : true,
    },
});

const Word = mongoose.model('Word', wordSchema); 

export default Word; 
