const { appendFile } = require("fs");

const appLog=(req,res,next)=>{

    const ip = req.rawHeaders['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;

    const data=`${new Date()} request ${req.method} is made on ${req._parsedUrl.path} by IP:- ${ip}\n`;
    console.log(data);
    appendFile(process.env.appLogFileName,data,(err)=>{
        if(err){
            console.log(err);
        }
        
    });
    next();
}

const verifyAuthHeader=(req,res,next)=>{
    const authHeader=req.headers.authorization ||null;
    console.log(authHeader);
    if(authHeader == null){
        res.status=403;
        res.send("Access Denied");
    }
    else{
        console.log("Auth Header middleware passed!");
        next();
    }
}

module.exports={
    appLog,
    verifyAuthHeader
}