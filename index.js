var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hi there! am running on host ' + os.hostname())
  res.end()
}

http.createServer(handleRequest).listen(3000)
