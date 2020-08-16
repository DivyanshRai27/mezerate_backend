const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

////////////Class 10th Routers///////////////
const class10Router = require("./routers/classes/class10/class10")
app.use(class10Router)



app.get('/', (req,res) =>{
    res.render('index',{Title:"Mezerate: Find your study stuff here"})
})

app.listen(port, function() {
    console.log("Server started on port 5000");
  });
  