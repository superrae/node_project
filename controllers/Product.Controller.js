const {getAllProducts,createProduct} = require('../services/Product.Service')
const express = require('express')
const router = express.Router();


router.get('/',async(req,res)=> {
    const result = await getAllProducts()
    res.send(result)
})

router.post('/add',async(req,res)=> {
    const { name,price,quantity } = req.body

    const result = await createProduct(name,price,quantity)
    res.send(result)
})


module.exports = {
    productRouter: router
}