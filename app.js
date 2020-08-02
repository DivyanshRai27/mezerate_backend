const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.render('index')
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  