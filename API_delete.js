
var modl=require('./m1');
var page=require('./m2');
// console.log(modl(2,3));

var data=modl(45,5);


var http=require('http');

http.createServer(
function(req,resp)
{
    resp.writeHead(200,{'Content-Type':'text/html'});
    
    
    resp.write(page);
    resp.end();

}

).listen(200);