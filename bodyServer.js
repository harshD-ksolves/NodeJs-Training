const http=require('http');


const hostName='localhost';
const port = 3000;

const server=http.createServer((req,res)=>{
    const body = [];
    const params=[];
    if(req.method=="POST"){
        

        req.on("data", chunk => {
            body.push(chunk);
            let str=body.toString();
            console.log();
            params.push(str.slice(str.indexOf("data;")+5,str.length));
        });
        
        
    }
    
    
    res.statusCode=200;
    req.on("end", () => {
        // converts buffer stream into readable string format
        console.log(params);
        let parsedBody =Buffer.concat(body).toString(); //
        //console.log(parsedBody);
        res.end(parsedBody);
      });
});

server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});