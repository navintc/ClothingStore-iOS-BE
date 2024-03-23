const {sequelize} = require('../database/database')
const {DataTypes} = require('sequelize');

const ClothsModel = sequelize.define('cloths',{
    
    name:{
        type:DataTypes.STRING,
        validate:{
            max:20
        }
    },
    category:{
        type:DataTypes.STRING,
        validate:{
            max:20
        }
    },
    price:{
        type:DataTypes.FLOAT,
    },
    descrip:{
        
        type:DataTypes.STRING,
        validate:{
            max:300
            
        },
    },
    imageurl:{
        type:DataTypes.STRING,
           },
    color:{
        type:DataTypes.STRING,
        validate:{
            max:20
        }
    },
    colorHex:{
        type:DataTypes.STRING,
        validate:{
            max:10
        }
    },
})

module.exports = ClothsModel