const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    
    question: {
        type: String,
        required:true
    },

    answer: {
        type: String,
        required:true
    },
   
    correct: {
        type: Boolean,
        default: false
    },

    active: {
        type: Boolean,
        default: true
    },

    createDate: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;

