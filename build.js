// app.html은 claude.ai Artifact에 올리는 본문(조각)이다. 정적 호스팅용 index.html은 여기에 문서 뼈대만 씌워 만든다.
const fs = require("fs");
const body = fs.readFileSync(__dirname + "/app.html", "utf8");
fs.writeFileSync(__dirname + "/index.html",
`<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0);padding-bottom:env(safe-area-inset-bottom,0)}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`);
console.log("index.html 생성");
