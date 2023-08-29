var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type': 'text/html'});
    // return the part of the URL that comes after the domain name
    res.write(req.url);
    res.end();
}).listen(8080);