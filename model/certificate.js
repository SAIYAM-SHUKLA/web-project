const mongoose = require("mongoose")
// const certificateSchema = new mongoose.Schema({
//     // name_of_certificate:{
//     //     type: String,
//     //     required: true
//     // },
//     img: {
//         data: Buffer,
//         contentType: String
//     }
//     // discription_of_the_certificate:String,
//     // review:String,
//     // date_of_reciving:Date

// })
// const certificate = mongoose.model("certificate", certificateSchema)


// module.exports = certificate




const certificateSchema = new mongoose.Schema({
    name_of_certificate:{
        type: String
    },
    certificate:{
        data:Buffer,
contentType: String

    }
    ,
    discription_of_the_certificate:String,
    review:String,
    date_of_reciving:Date

})
const certificate = mongoose.model("certificate", certificateSchema)


module.exports = certificate