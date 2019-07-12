var http = require('http');

http.createServer(function (req, res) {
  // 发送HTTP 头部
  // HTTP状态值：200 OK
  // 设置HTTP头部，状态码是200，文件类型是html，字符集是utf8

  res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

  res.write("你好 nodejs");

  res.end(); // 结束响应

}).listen(8001);
