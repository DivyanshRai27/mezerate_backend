const nodemailer = require("nodemailer");
const express = require('express')
const router = new express.Router()

router.post('/message', (req,res) =>{
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
        subject: "Mezerate message", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });
    res.render('submitted',{Title:"Submitted"})
})

router.post('/doubt', (req,res) =>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details<h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Doubt</h3>
    <p>${req.body.doubt}</p>
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
        subject: "Mezerate Doubts", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });
    res.render('submitted',{Title:"Submitted"})
})

router.post('/contribute', (req,res) =>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Want to contribute<h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
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
        subject: "Mezerate Contribute", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });
    res.render('submitted',{Title:"Submitted"})
})


module.exports = router