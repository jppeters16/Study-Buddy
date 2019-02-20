var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    saved: {
        type: Boolean,
        default: false
    },
    
    createDate: {
        type: Date,
        default: Date.now
    },
    
    
    ///ref/link to a user created set of questions
    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }]
});

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;