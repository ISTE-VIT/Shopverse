const express = require('express')
const {
    addProduct,
    getAllProductsList,
    getProductsList,
    getOneProduct,
    updateProductStock,
    deleteProduct
} = require('../controllers/productControllers')

const router = express.Router();

router.post('/products', addProduct)
router.get('/productsListAll', getAllProductsList)
router.get('/productsOne/:id/:name', getOneProduct)
router.get('/productList/:id', getProductsList)
router.put('/updateProductStock/:id/', updateProductStock)
router.get('/deleteProduct/:id', deleteProduct)

module.exports = {
    routes: router
}