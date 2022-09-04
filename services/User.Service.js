const {User} = require('../models/User')

const login = async(userName,password) => {
    const user = await User.findOne({where:{userName:userName,password:password}})
    return user? user : 'wrong username or password'

}

const signUp = async (userName,password)=> {
    const checkedUser = await User.findOne({where: {userName:userName,password:password}})
    if (checkedUser) return 'username already exists '

    const user = await User.create({userName, password})
    return user
}

module.exports = {
    signUp,
    login
}