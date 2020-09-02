const express = require('express')
const router = new express.Router()

router.get('/kindergarten', (req,res)=>{
    res.render('classes/kindergarten/kindergarten',{Title:"Kindergarten", status:" "})
})

router.get('/kindergarten/maths/counting', (req,res)=>{
    res.render('classes/kindergarten/maths/counting',{Title:"Counting",status:" "})
})

module.exports = router