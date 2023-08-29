var http = require('http');
//include the fs module for reading, updating, creating files
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, { 'content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);