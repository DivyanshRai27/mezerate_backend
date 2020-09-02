const express = require('express')
const router = new express.Router()

router.get('/kindergarten', (req,res)=>{
    res.render('classes/kindergarten/kindergarten',{Title:"Kindergarten", status:" "})
})

module.exports = router