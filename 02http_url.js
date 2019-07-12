var http = require('http');

var url = require('url');

http.createServer(function (req, res) {
  // 输入http://localhost:8001/news?aid=123&cid=3  拿到aid和cid
  // req.url 获取浏览器url输入的信息





  res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

  if (req.url != '/favicon.ico') {
    console.log(req.url);
    var result = url.parse(req.url, true ); // 第一个参数是地址 第二个参数是true的话表示表get传值转换成对象
    console.log(result.query.aid); // 获取url的get传值
    console.log(result.query.cid);
  }

  res.write("你好 nodejs11");

  res.end(); // 结束响应

}).listen(8001);
