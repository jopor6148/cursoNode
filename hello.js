var http = require("http");// add library
var manejador = function (request,response) {
  console.log("Hola mundo"); // print in console (CMD)
  response.end("para la pantalla");// close connection to server and print the text in screen
}
var servidor = http.createServer(manejador);//create a server as listener, need a param as function

servidor.listen(90); // we indicated port by listen petitions
