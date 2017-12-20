var express = require('express');
var moment = require('moment');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var router = express.Router();

//nodemailer 2

router.route('/mail_contacto')
  .post(function(req, res) {

    var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'amatea@amatea.org',
           pass: 'cibsolar1609'
       }
    });
    var date = moment().format('MMMM Do YYYY, h:mm:ss a')
    var data = req.body;
    var mailOptions = {
       from: 'ApiAmatea ',
       to: 'amatea@amatea.org',
       subject: 'Se han contactado! - Contacto',
       html: (
         'Se recibio un mensaje de: ' + data.nombre + data.apellido + '<br>' + 
         'Organizacion: ' + data.organizacion + '<br>' + 
         'email: '  + data.email  + '</br>' +
         'Comentario: ' + data.comentario + '\n'+ '</br>'+ 
         'Fecha: ' + date 
        ) 
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
    });

 });

 /* module.exports = mailrouter;

 mailrouter.route('/mail_donacion')
  .post(function(req, res) {

    var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'amatea@amatea.org',
           pass: 'cibsolar1609'
       }
    });
    var date = moment().format('MMMM Do YYYY, h:mm:ss a')
    var data = req.body;
    var mailOptions = {
       from: 'ApiAmatea',
       to: 'amatea@amatea.org',
       subject: 'Se han contactado! - Donacion',
       html: (
         'Se recibio un mensaje de: ' + data.correo + '<br>' + 
         'Fecha: ' + date 
        ) 
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
    });

 });

 module.exports = mailrouter;

 */

module.exports = router;