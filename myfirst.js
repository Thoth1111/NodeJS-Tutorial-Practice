// include the http built-in NodeJS module
var http = require('http');

// create a server object 
http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);