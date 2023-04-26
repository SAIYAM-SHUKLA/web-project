const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require("path")
const multer = require("multer")
// const bootstrap = require("bootstrap")
const mongoose = require("mongoose")
const person = require("./model/person")


// const upload = multer({ dest: 'uploads/' })
// const image= require("./model/certificate")
const certificate = require('./model/certificate')
// const { Router } = require('express')
// Router.use(express.static(__dirname+"./public/uploads/"))
app.use(express.static(path.join(__dirname,"./public/upload/")))






// multer code
const storage = multer.diskStorage({
    destination:"./public/uploads/" ,
    filename:(req, file, cb)=> {
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
      
    }
  })
  
  
  const upload = multer({ storage: storage }).single("certificate")


//   multer ends





mongoose.connect("mongodb://localhost:27017/PORIPHOLIO_PERSON_RECORD").then(()=>{console.log("this connection work")})
.catch(err=>{
    console.log("this is an err")
    console.log(err)
})



app.use(express.static(path.join(__dirname,"public")))
app.listen(process.env.PORT||3000,()=>console.log("listning on 3000")) 
app.set("view engen","ejs")
app.set("views",path.join(__dirname,"/views"))
app.get("/",(req,res)=>{
    res.render("landing.ejs")

})
app.get("/form",(req,res)=>{
 res.render("form.ejs")
})
app.get("/action",(req,res)=>{
    let q = new person(req.query)
    console.log(q)
    q.save().then(()=>{console.log("saved sucessfully")})
    .catch(()=>{console.log("not saved")})
    res.redirect("/")

})
app.get("/certificate",(req,res)=>{
    res.render("certificate.ejs")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
    

})
app.get("/details_match" ,(req,res)=>{
    if(req.query.pass==="Saiyam123@" & req.query.id =="Saiyam_Shukla"){
        console.log(req.query.pass)
        res.render("change.ejs")

    }
    else {
        console.log("passward incorrect")
        
    }

})
// app.post("/sumit",(req,res)=>{
//     console.log(req.query.img)
//     console.log("successfully submited")
//     res.redirect("/")
// })


// app.get('/sumit',function (req, res, next) {
//     // req.file is the `avatar` file
//     // let imgfl= req.query.certificate
//     // console.log(lmgfl)
//     console.log(req.query)
//     let a =new certificate(req.file)
//     a.save().then(()=>{console.log("sussessfully submited")})
//     res.send(req.file.certificate)
//     // req.body will hold the text fields, if there were any
//   })

app.post("/upload",upload,(req,res)=>{
    let sucess = req.file.filename+"uplode sucessfully"
    console.log(req.body)
    let a =new certificate(req.body)
        a.save().then(()=>{console.log("sussessfully submited")})

})



