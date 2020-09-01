const express = require('express')
const router = new express.Router()

let pages = process.cwd() + '/pages/classes/class10'

router.get('/class10', (req,res) =>{
    res.render('classes/class10/class10',{Title:"Class 10th",status:"We are currently adding english material"})
})

router.get('/class10/maths', (req,res) =>{
    res.render('classes/class10/maths/maths',{Title:"Maths",status:"We are currently adding english material"})
})

router.get('/class10/hindi', (req,res) =>{
    res.render('classes/class10/hindi/hindi',{Title:"Hindi",status:"We are currently adding english material"})
})

router.get('/class10/science', (req,res) =>{
    res.render('classes/class10/science/science',{Title:"Science",status:"We are currently adding english material"})
})

router.get('/class10/english', (req,res) =>{
    res.render('classes/class10/english/english',{Title:"English",status:" "})
})

router.get('/class10/exams', (req,res) =>{
    res.render('classes/class10/exams',{Title:"Exams",status:" "})
})





module.exports = router