/**
 * Created by 391429 on 7/17/2014.
 */

var path = require('path'),
    fs = require('fs'),
    yaml = require('js-yaml'),
    util = require('util'),
    http = require('http'),
    express=require('express');
    app=express();



app.get('/yaml',function(req,res) {
    fs.readFile(path.join('Parse_y2.yaml'), 'utf8', function (err, fileContents) {
        if (err) {
            err;
        }
        else {
            console.log('\n');
            console.log('\noutputs:\n');
            var fileContents = yaml.safeLoad(fileContents);

            var item = util.inspect(fileContents.*.default[0].expected, false, 10, false);
            console.log(item);
            res.send(item);
        }
    });
});


app.listen(1056);


