const mongoose =require("mongoose")


const personSchema = new mongoose.Schema({
    cname:{
        type: String,
        required: true
    },
    name:String,
    cont_no:Number,
    review:String,
    other_review:String

})
const person = mongoose.model("product",personSchema)


module.exports = person





