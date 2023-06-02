const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello sweta choutala</h1>");
    resp.end();
}).listen(4500);