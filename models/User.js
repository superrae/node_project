const {Sequelize,Model} = require('sequelize')
const {db} = require('../db')

class User extends Model {}

User.init(
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName: Sequelize.STRING,
        password: Sequelize.STRING,
        
    },{
        sequelize:db,
        modelName: 'user',
    })

User.build()
module.exports ={User}

