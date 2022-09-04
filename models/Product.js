const {Sequelize,Model} = require('sequelize')
const {db} = require('../db')

class Product extends Model {}

Product.init(
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: Sequelize.STRING,
        price: {
            type:Sequelize.FLOAT,
            allowNull: false
        },
        Quantity:{
            type:Sequelize.INTEGER,
            allowNull: false,
        }
    },{
        sequelize:db,
        modelName: 'Product',
    })

Product.build()
module.exports ={Product}

