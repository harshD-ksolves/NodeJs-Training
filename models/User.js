const {Sequelize, DataTypes}=require('sequelize');
const db=require('../db');

const User=db.define('user',{
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true,
        }
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            isNumeric: true,
            
        }
    },
    password:{
        type:DataTypes.TEXT,
        allowNull: false,
    }
},{
    tableName: 'users',

});

module.exports=User;