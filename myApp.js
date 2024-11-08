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
let message = { "message": "Hello json" }

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {

        message.message = message.message.toUpperCase();
    }

    res.json(message)
})


























module.exports = app;