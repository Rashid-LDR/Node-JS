var http=require('http');
var page=require('./m2');
var fs=require('fs');


http.createServer(function(req,resp){
    fs.readFile('index.html',function(err,data){
        resp.writeHead(200,{'Content-type':'text/html'})
        resp.write(page);
        // resp.write(data);
        return resp.end();
    })
}).listen(250);
