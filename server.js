var express = require('express')
const app = express()
var favicon = require('serve-favicon')
var path = require('path')
var http = require('http').Server(app)
var io = module.exports = require('socket.io')(http)
var socket = require('./server/socket')(io)

var storage = require('./server/storage')

app.use(cors({origin:'https://projekte.milabor.ch/chooseStructureInLife/'}))

app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.static(__dirname + '/client'))
app.use('/',require('./server/routes'))
