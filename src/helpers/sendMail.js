"use strict"

const nodemailer = require('nodemailer')


module.exports= function (to,subject,message) {
// //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"....",
        pass:"ypop huad lwqc liih"
    }
})
transporter.sendMail({
    to: to,//"ensarsagkal@gmail.com",
        subject: subject,// 'Hello',
    text: message,//'Hello There. How are you?',
    html: message,//'<b>Hello There.</b> <p>How are you?</p>',
},(error, succes)=>console.log(succes,error))
/* ------------------------------------------------------- */

}