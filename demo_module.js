var http = require('http');
var dt = require('./myfirstmodule');

http.createServer( function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

//running the address 'http://localhost:8080/' will return 'The date and time are currently: ~current date and time~'