const http=require('http');
const url=require('url');

const hostName='localhost';
const port = 3000;

const server=http.createServer((req,res)=>{
    const reqUrl=req.url;
    const q=url.parse(reqUrl,true);
    console.log(q.query);
    
    res.statusCode=200;
    res.end(JSON.stringify(q.query));
});

server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});