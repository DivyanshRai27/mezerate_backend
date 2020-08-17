const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

////////////Class 10th Routers///////////////
const class10Router = require("./routers/classes/class10/class10")
app.use(class10Router)



app.get('/', (req,res) =>{
    res.render('index',{Title:"Mezerate: Find your study stuff here", msg:""})
})

app.post('/', (req,res) =>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details<h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
        // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: 'themezerate@gmail.com', // generated ethereal user
        pass: 'magicmouse@2', // generated ethereal password
        },
        tls:{
            rejectUnuthorized: false
          }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Nodemailer Contact" <themezerate@gmail.com>', // sender address
        to: 'contact@mezerate.com', // list of receivers
        subject: "Node contact request", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });
    
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render('index',{Title:"Mezerate: Find your study stuff here", msg:"✅ Message sent"})
})

app.listen(port, function() {
    console.log("Server started on port 5000");
  });
  