var http = require('http');
var config = require('./config')

var app = http.createServer(function (req, res) {

  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

  res.write('你好 hello nodejs');
  console.log(config);

  res.end();

})

app.listen(8002, '127.0.0.1')
