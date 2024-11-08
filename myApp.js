require('dotenv').config();
let express = require('express');
let app = express();

// console.log('Hello World');

// Start a Working Express Server
// app.get('/',(req,res) =>
// {
//     res.send('Hello Express');
// })

// Serve an HTML File
// let targetFilePath = __dirname + '/views/index.html';

// app.get('/',(req,res) =>
// {
//     res.sendFile(targetFilePath);
// })

// Serve Static Assets
// let targetFilePath = __dirname + '/public';
// app.use('/public', express.static(targetFilePath));

// Serve JSON on a Specific Route
// let message = {"message": "Hello json"}

// app.get('/json',(req,res)=>
// {
//     res.json(message)
// })

// Use the .env File
// let message = { "message": "Hello json" }

// app.get('/json', (req, res) => {
//     if (process.env.MESSAGE_STYLE === 'uppercase') {

//         message.message = message.message.toUpperCase();
//     }

//     res.json(message)
// })

// Implement a Root-Level Request Logger Middleware
// app.use((req, res, next) => {
//     console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//     next();
// })

// Chain Middleware to Create a Time Server
// app.get('/now', (req, res, next) => {
//     console.log('Middleware');
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     console.log('Handler');
//     const timeObject = { time: req.time };
//     res.json(timeObject);
// })

// Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
    const word = req.params.word;
    // const { word,echo } = req.params;

    res.json({ echo: word });
})
























module.exports = app;