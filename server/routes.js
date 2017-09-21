var express = require('express');
var app = express.Router();
var path = require('path')

// wildcard route (needed for browserhistory on react spa pattern)
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../', 'index.html'))
})

module.exports = app
