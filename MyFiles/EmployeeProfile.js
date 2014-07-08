/**
 * Created by 391429 on 6/19/2014.
 */


var fs=require('fs');
fs.readFile('./ProfileEmp.json',function(err,data)
{
    if(err)
    {
        err;
    }
    else
    {
        var JsonData = data;
        JsonData = JSON.parse(JsonData);
        JsonData.employee.id = "122";
        fs.writeFile('./ProfileEmpUpdated.json',JSON.stringify(JsonData));
        var http = require('http');
        http.createServer(function(req,resp)
        {
            console.log(JsonData);
            res.writeHead(200, {"Content-Type":"text/html"});
            resp.write(JsonData);
            resp.end();
        }).listen(8020);
    }
});