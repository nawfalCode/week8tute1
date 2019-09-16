let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    name: String,
    age:Number
});

let studentModel=mongoose.model("Student",studentSchema);
module.exports=studentModel;
