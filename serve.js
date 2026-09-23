// 화면 확인용 간단한 정적 서버 (node serve.js)
const http = require("http"), fs = require("fs"), path = require("path");
const TYPES = {".html":"text/html; charset=utf-8", ".js":"text/javascript", ".css":"text/css"};
http.createServer((req, res) => {
  const file = path.join(__dirname, (req.url.split("?")[0] === "/" ? "/index.html" : req.url.split("?")[0]));
  fs.readFile(file, (e, d) => e ? (res.writeHead(404), res.end("no")) :
    (res.writeHead(200, {"Content-Type": TYPES[path.extname(file)] || "application/octet-stream"}), res.end(d)));
}).listen(8765, () => console.log("http://localhost:8765"));
