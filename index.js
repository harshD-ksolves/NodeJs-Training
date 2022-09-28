const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const {appLog,verifyAuthHeader}=require("./middleware");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug');
//App Logger middleware.
app.use(appLog);//Middleware for whole app

//Basic Routing
app.get('/', (req,res)=>{
    console.log(req.query?.name);

    res.status=200;
    res.render('home',{title:'Harsh\'s Express', message:`Hello ${req.query?.name}`});
});

//middleware for specific path.
app.post('/',verifyAuthHeader,(req,res)=>{
    console.log(req.body);

    res.status=200;
    res.send(req.body);
});

app.put('/:id',(req,res)=>{
    console.log(req.params?.id);
    
    res.status=200;
    res.send([req.body,req.params]);
});

app.delete("/:id",(req,res)=>{
    console.log(req.params?.id);

    res.status=200;
    res.send(req.params);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Express server is running at http://localhost:${process.env.PORT}`);
});
