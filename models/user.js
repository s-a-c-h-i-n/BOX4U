var mongoose = require("mongoose");

var userDataSchema = new mongoose.Schema({
    FName: {type: String, required: true},
    LName: {type: String, required: true},
    Email: {type: String, required: true, unique: true},
    Password: {type: String, required: true},
    Mobile: {type:Number, required:true, maxlength: 10},
    City: {type: String, required: true}
});
var User = mongoose.model('User', userDataSchema);
module.exports = {User};