const { appendFile } = require('fs');
const http=require('http');
const reqLogFile="./requestsLog.txt";

const hostName='localhost';
const port = 3000;


const server = http.createServer((req, res)=>{
    
    const headers=req.headers;
    const reqUrl=req.url;

    appendFile(reqLogFile,"\n Url: "+reqUrl+" By Method:- "+req.method+" :-"+JSON.stringify(headers),(err)=>{
        if(err){
            console.log(err);
        }
    });

    res.statusCode=200;

    res.end();

});
server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});