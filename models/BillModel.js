const {sequelize} = require('../database/database')
const {DataTypes} = require('sequelize');

const BillModel = sequelize.define('bills',{
    
    name:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    payment:{
        type:DataTypes.FLOAT,
    },
    addressname:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    address1:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    address2:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    city:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    country:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    items:{
        type:DataTypes.STRING,
    },
})

module.exports = BillModel