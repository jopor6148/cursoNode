var http = require("http"),
    fs = require("fs");
    parser = require("./params_parser.js");
    render = require("./render_view.js");
    var p = parser.parse;
    var r = render.render;
http.createServer(function (req,res) {
  var html = fs.readFile("./index.html",function(err,html){

    // obtener parametros de url
    var vars = p(req);
    var html_string = r(html,vars);
    res.write(html_string);
    res.end();
  });
}).listen(8080);
