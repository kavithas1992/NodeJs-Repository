var express = require('express');
var app = express();
var fs = require('fs');
app.get('/data',function(req,resp)
{

    var data = fs.readFile('./WebDataJson.json', function (err, data) {
        resp.setHeader('Content-Type', 'application/json');
        resp.send(data);
    })
});
app.listen(8080);
