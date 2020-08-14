const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

let pages = __dirname + "/pages"

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/test', (req,res) =>{
    res.sendFile(pages+"/test.html")
})

app.get('/class10', (req,res) =>{
    res.sendFile(pages+"/classes/class10/class10.html")
})

app.get('/class10/maths', (req,res) =>{
    res.sendFile(pages+"/classes/class10/maths/maths.html")
})

app.get('/class10/hindi', (req,res) =>{
    res.sendFile(pages+"/classes/class10/hindi/hindi.html")
})


app.listen(port, function() {
    console.log("Server started on port 3000");
  });
  