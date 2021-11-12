var fs = require("fs"); // 파일시스템 모듈
var express = require("express"); // express 모듈
var app = express(); // express 객체 생성

var http = require("http"); // Http 웹 서버 모듈

var server = http.createServer(app); // 서버 객체 생성

app.set("port", 7080); // 서버 포트 설정

server.listen(app.get("port"), function () {
  // 서버 가동
  console.log("Express server listening on port " + app.get("port"));
});

// 이미지파일 호스팅 로직
app.get("/image/:name", function (req, res) {
  var filename = req.params.name;
  console.log(__dirname + "/images/" + filename);
  fs.exists(__dirname + "/images/" + filename, function (exists) {
    if (exists) {
      fs.readFile(__dirname + "/images/" + filename, function (err, data) {
        res.end(data);
      });
    } else {
      res.end("file is not exists");
    }
  });
});

// 텍스트 파일호스팅 로직
app.get("/text/:name", function (req, res) {
  var filename = req.params.name;
  console.log(__dirname + "/texts/" + filename);
  fs.exists(__dirname + "/texts/" + filename, function (exists) {
    if (exists) {
      fs.readFile(__dirname + "/texts/" + filename, function (err, data) {
        res.end(data);
      });
    } else {
      res.end("file is not exists");
    }
  });
});
