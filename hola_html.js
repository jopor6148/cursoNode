var http = require("http"),
    fs = require("fs");

// var html = fs.readFileSync("./index.html");
var html = fs.readFile("./index.html",function(err,html){
  http.createServer(function (req,res) {
    res.writeHeader(200,{})
    res.write(html);
    res.end();
  }).listen(8080);
});

// http.createServer(function (req,res) {
//   res.write(html);
//   res.end();
// }).listen(8080);
