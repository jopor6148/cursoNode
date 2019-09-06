var http = require("http"),
    fs = require("fs");

http.createServer(function (req,res) {
  var html = fs.readFile("./index.html",function(err,html){
    var html_string = html.toString();
    var variables = html_string.match(/[^{\}]+(?=\})/g);
    var nombre = "Norma";
    var json = "{nombre:'Jorge'}";
    console.log(eval(json));
    for (var i = 0; i < variables.length; i++) {
      var value = eval(variables[i]);
      html_string = html_string.replace("{"+variables[i]+"}",value);
    }
    // res.writeHeader(200,{})
    res.write(html_string);
    res.end();
  });
}).listen(8080);
