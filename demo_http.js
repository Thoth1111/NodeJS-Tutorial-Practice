//include http module
var http = require('http');

//create a server object. The function passed to http.createServer() has req-representing the client request as an object, &
http.createServer(function (req, res) {
    // write a response HTTP header (status code & )
    res.writeHead(200, {'content-Type': 'text/html'});
    // write a response to the client
    res.write('Hello World!');
    // end the response
    res.end();
}).listen(8080); // the server object listens on port 8080