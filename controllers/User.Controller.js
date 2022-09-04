const {
    login,
    signUp,
} = require('../services/User.Service')
const express = require('express')
const router = express.Router();


router.post('/login',async(req,res)=> {
    const {userName,password} = req.body
    const result = await login(userName,password)
    res.send(result)
})

router.post('/signup',async(req,res)=> {
    const {userName,password} = req.body

    const result = await signUp(userName,password)
    res.send(result)
})


module.exports = {
    userRouter: router
}