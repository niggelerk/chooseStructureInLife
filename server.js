#!/bin/env node

var express = require('express')
var app = express()
var favicon = require('serve-favicon')
var path = require('path')
var http = require('http').Server(app)


app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use('/public', express.static(__dirname + '/public'))
app.use('/', require('./server/routes'))


// network
app.set('port', process.env.PORT || 3200)
app.set('ip', "127.0.0.1")

http.listen(app.get('port'), app.get('ip'), function() {
  console.log('listening on *:' + app.get('port'));
});
