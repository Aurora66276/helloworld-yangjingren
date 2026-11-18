const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const now = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai'
  });

  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Hello World - yangjingren</title>
  <style>
    body {
      font-family: "Microsoft Yahei", "PingFang SC", sans-serif;
      background: #f5f7fa;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
    .card {
      background: #fff;
      border-radius: 14px;
      padding: 48px 56px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
      text-align: center;
    }
    h1 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0 0 20px;
    }
    .time {
      color: #606266;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！我是yangjingren，我的第一个AI开发的网站</h1>
    <div class="time">服务器当前时间：${now}</div>
  </div>
</body>
</html>
  `;

  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
