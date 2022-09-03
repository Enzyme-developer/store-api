const Product = require('../model/product')

const getAllProductsStatic = async (req, res) => {
    // throw new Error ('testing async error')
    const products = await Product.find({})
    res.status(200).json({products})
}


const getAllProducts = async (req, res) => {
//    const products = await Product.find({})
    res.status(200).json({msg: 'products route'})
}


module.exports = { getAllProducts, getAllProductsStatic }