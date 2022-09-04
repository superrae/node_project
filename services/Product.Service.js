const {Product} = require('../models/Product')


const createProduct = async(name,price,quantity) =>{
    console.log(name,price,quantity);
  return await Product.create({name,price,Quantity:quantity})

}
const getAllProducts = async() => {
    return Product.findAll()
}

module.exports = {
    createProduct,
    getAllProducts
}
