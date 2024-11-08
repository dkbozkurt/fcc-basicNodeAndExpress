let express = require('express');
let app = express();

console.log('Hello World');

// Start a Working Express Server
app.get('/',(req,res) =>
{
    res.send('Hello Express');
})































module.exports = app;