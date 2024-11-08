let express = require('express');
let app = express();

console.log('Hello World');

// Start a Working Express Server
// app.get('/',(req,res) =>
// {
//     res.send('Hello Express');
// })

// Serve an HTML File
let targetFilePath = __dirname + '/views/index.html';

app.get('/',(req,res) =>
{
    res.sendFile(targetFilePath);
})





























module.exports = app;