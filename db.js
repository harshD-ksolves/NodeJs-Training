const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(process.env.pgDB, process.env.pgUser, 'root', {
    host: 'localhost',
    dialect: 'postgres',
  });



module.exports=sequelize;