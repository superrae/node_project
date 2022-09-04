const {Sequelize,Model} = require('sequelize')
const {db} = require('../db')

class Cart extends Model {}

Product.init(
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
      
       
    },{
        sequelize:db,
        modelName: 'cart',
    })

Cart.build()
module.exports ={Cart}

