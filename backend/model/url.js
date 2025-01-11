import mongoose from "mongoose";

const Urlshort= new mongoose.Schema({
     shortid:{
        type:String,
        unique:true,

     },
     redirect:{
        type:String,
        require:true
     },
     visited:[{type:Date}]

},{timestamps:true})

export const URL= mongoose.model("URL",Urlshort);