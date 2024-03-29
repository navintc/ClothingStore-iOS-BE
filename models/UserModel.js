const {sequelize} = require('../database/database')
const {DataTypes} = require('sequelize');

const UserModel = sequelize.define('users',{
    name:{
        type:DataTypes.STRING,
        validate:{
            max:150
        }
    },
    email:{
        type:DataTypes.STRING,
        validate:{
            max:100
        }
    },
    age:{   
        type:DataTypes.INTEGER,
    },
    gender:{
        type:DataTypes.STRING,
        validate:{
            max:20
        }
    },
    passwd:{
        type:DataTypes.STRING,
    },
})

module.exports = UserModel