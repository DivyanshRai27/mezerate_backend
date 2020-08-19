const express = require('express')
const router = new express.Router()

let pages = process.cwd() + '/pages/classes/class10'

router.get('/class10', (req,res) =>{
    res.render('classes/class10/class10',{Title:"Class 10th",status:"We are currently adding Maths NCERT solutions"})
})

router.get('/class10/maths', (req,res) =>{
    res.render('classes/class10/maths/maths',{Title:"Maths",status:" "})
})

router.get('/class10/hindi', (req,res) =>{
    res.render('classes/class10/hindi/hindi',{Title:"Hindi",status:"We are currently adding Maths NCERT solutions"})
})

module.exports = router