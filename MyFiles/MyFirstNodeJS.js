/**
 * Created by 391429 on 6/19/2014.
 */
var http = require("http");

http.createServer(function(req, res){
      console.log('hello');
      res.writeHead(200, {"Content-Type":"text/html"});
      res.write("Hello Nodejs you there !!!!");
      res.end();
}).listen(8020);