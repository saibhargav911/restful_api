//schema
const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
        validate(value) {
            if (!(validator.isEmail(value))) {
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required: true,
        unique:[true,"Mobile number already exists"]
    },
    address:{
        type:String,
        required: true
    }
});
//model
const StudentModel=new mongoose.model("StudentModel",studentSchema);
module.exports=StudentModel;