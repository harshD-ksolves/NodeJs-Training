const http=require('http');


const hostName='localhost';
const port = 3000;

const server=http.createServer((req,res)=>{
    const body = [];
    const data=[];
    if(req.method=="POST"){
        
        req.on("data", chunk => {
            body.push(chunk);
            
        });
        
        
    }
    
    
    res.statusCode=200;
    req.on("end", () => {
        // converts buffer stream into readable string format
        let parsedBody =Buffer.concat(body).toString(); //
        //console.log(body.toString().split("="));
        d=parsedBody.split("&").toString().split(",");
        for(i=0;i<d.length;i++){
            let s=d[i].toString().split("=");
            data.push(s);
        }
        console.log(Object.fromEntries(data));
        res.statusCode=200;
        res.setHeader("Content-Type", "Application/json");
        res.end(JSON.stringify(Object.fromEntries(data)));
      });
});

server.listen(port,hostName,()=>{

    console.log(`Server running at http://${hostName}:${port}`);
});