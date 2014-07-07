var express=require('express');
var routes = require('./routes/index');
//var users = require('./routes/users');
var bodyParser = require('body-parser');
var app=express();

app.set('views','views');
app.set('view engine','jade');
app.use(bodyParser());
app.use('/', routes);
//app.use('/users', users);
//app.use('/user', routes);
app.listen(8000);
/*app.get('/home',function(req,res)
{
    res.render('SampleView',
        {
            title : 'Home'
        });
    res.send();
});*/




//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

module.exports = app;