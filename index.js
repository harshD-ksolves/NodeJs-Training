const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));


//Basic Routing
app.get('/', (req,res)=>{
    console.log(req.query);

    res.status=200;
    res.send(req.query?.name);
});

app.post('/',(req,res)=>{
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
