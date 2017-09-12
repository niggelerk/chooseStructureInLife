var express = require('express');
var app = express.Router();
var path = require('path')

app.get('/game',function (req,res) {
 res.sendFile(path.resolve(__dirname,'../public/src/components/','game.js'))
})

app.get('/editor',function (req,res) {
 res.sendFile(path.resolve(__dirname,'../public/src/components/','editor.js'))
})

// wildcard route (needed for browserhistory on react spa pattern)
app.get('*', function (req, res){
 res.sendFile(path.resolve(__dirname, '../client/views/', 'index.html'))
})

module.exports = app
