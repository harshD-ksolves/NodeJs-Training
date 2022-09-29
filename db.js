const pg=require('pg').Pool;

const pool=new pg({
    user:process.env.pgUser,
    password: process.env.pgPass,
    database: process.env.pgDB,
    host: process.env.pgHost,
    port: process.env.pgPort
});

module.exports=pool;