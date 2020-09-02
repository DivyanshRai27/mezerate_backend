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

/////////////Forms Routers///////////////////
const formsRouter = require("./routers/forms")
app.use(formsRouter)

////////////Class 10th Routers///////////////
const class10Router = require("./routers/classes/class10/class10")
app.use(class10Router)

///////////////kindergarten Routers//////////
const kindergartenRouter = require("./routers/classes/kindergarten/kindergarten")
app.use(kindergartenRouter)



app.get('/', (req,res) =>{
    res.render('index',{Title:"Mezerate: Find your study stuff here"})
})

app.get('/submitted', (req,res) =>{
    res.render('submitted',{Title:"Submitted"})
})

app.get('/doubt', (req,res) =>{
    res.render('doubt',{Title:"Any Doubt"})
})

app.get('/contribute', (req,res) =>{
    res.render('contribute',{Title:"Contribute Us"})
})

app.listen(port, function() {
    console.log("Server started on port 5000");
  });
  