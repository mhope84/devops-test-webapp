var os = require('os')
var http = require('http')
var message = require('./message')

function handleRequest(req, res) {
  res.write(message.getMessage())
  res.end()
}

http.createServer(handleRequest).listen(3000)
