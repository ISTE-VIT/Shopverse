const express= require('express')
const {addProduct, getAllProducts, getProduct, updateProduct, deleteProduct}=require('../controllers/productControllers')

const router= express.Router();

router.post('/product', addProduct)
router.get('/productsAll', getAllProducts)
router.get('/productOne/:id', getProduct)
router.get('/updateProduct/:id', updateProduct)
router.get('/deleteProduct/:id', deleteProduct)

module.exports= {
    routes:router
}