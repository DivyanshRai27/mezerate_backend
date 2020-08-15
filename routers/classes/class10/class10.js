const express = require('express')
const router = new express.Router()

let pages = process.cwd() + '/pages/classes/class10'

router.get('/class10', (req,res) =>{
    res.sendFile(pages+'/class10.html')
})

router.get('/class10/maths', (req,res) =>{
    res.sendFile(pages+"/maths/maths.html")
})

router.get('/class10/hindi', (req,res) =>{
    res.sendFile(pages+"/hindi/hindi.html")
})

module.exports = router