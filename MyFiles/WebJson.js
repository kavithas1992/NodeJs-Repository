var express = require('express');
var app = express();
var fs = require('fs');
app.get('/data',function(req,resp)
{

    /*fs.readFile('./WebDataJson.json',function(err,data)

    {
        if(err)
        {
            err;
        }
        else
        {
            resp.writeHead(200, {"Content-Type":"text/html"});
            var data = data;
            data = JSON.parse(data);
            resp.send(data);
        }
    });
    resp.end();*/
    var data = fs.readFile('./WebDataJson.json', function (err, data) {
        resp.setHeader('Content-Type', 'application/json');
        resp.send(data);
    })
});
app.listen(8080);