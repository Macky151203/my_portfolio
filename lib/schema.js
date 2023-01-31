import mongoose from "mongoose";
const mySchema= new mongoose.Schema({
    name:String,
    email:String,
    comment:String
});
module.exports= mongoose.model('List',mySchema)
