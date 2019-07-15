var http = require('http');

http.createServer(function(req, res) {
    res.end('hello nodejs');
}).listen(3000);