/**
 * Created by 391429 on 7/4/2014.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs=require('fs');
var url=require('url');
app.get('/getname', function(req, res)
{

    var id=req.query.name;
    console.log(id);

});
app.listen(9900);
