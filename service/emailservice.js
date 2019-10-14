"use strict";
const nodemailer = require("nodemailer");
const constant = require('../Constant');


module.exports = {
    verifymail: function(req, host, res){

        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: constant.email,
                pass: constant.emailPassword
            }
        });
        var mailOptions,link;
            link= `http://${host}"/users/verify?id="${req.id}`;
            mailOptions={
                to : req.email,
                subject : "Please confirm your Email account",
                html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
            }
            smtpTransport.sendMail(mailOptions, function(error, response){
             if(error){
                    console.log(error);
                res.end("error");
             }else{
                res.end("sent");
                 }
        });
    },
    forgotpasswordmail: function(req, res){
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "nodemailer1583@gmail.com",
                pass: "Ghjkl;123"
            }
        });
        var mailOptions,link;
            link="http://127.0.0.1:3000"+"/users/fogotpassword?Verifytoken="+req.Verifytoken;
            mailOptions={
                to : req.email,
                subject : "Please Reset Your Password Using Bottom Link",
                html : "Hello,<br> Please Click on the link to Reset Your Password.<br><a href="+link+">Click here to reset password</a>" 
            }
            smtpTransport.sendMail(mailOptions, function(error, response){
             if(error){
                res.end("error");
             }else{
                res.end("sent");
                 }
        });
    }
}
