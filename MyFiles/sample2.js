//Sample Jade file rendering output in another Jade file

var express=require('express');
var routes = require('../routes/index');
//var users = require('./routes/users');
var bodyParser = require('body-parser');
var app=express();

app.set('views','views');
app.set('view engine','jade');
app.use(bodyParser());
app.use('/', routes);

app.listen(8000);




app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
