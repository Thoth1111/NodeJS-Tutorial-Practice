var http = require('http');
//include the url module for parsing url strings
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type': 'text/html'});
    //.query returns an object containing the query string parameters
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

//running the address 'http://localhost:8080/?year=2023&month=August' will return '2023 August'