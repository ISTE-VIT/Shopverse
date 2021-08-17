const express= require('express')
const {addProduct, getAllProductsList, getProductsList,getOneProduct, updateProductList, deleteProduct, updateProductStock}=require('../controllers/productControllers')

const router= express.Router();

router.post('/product', addProduct)
router.get('/productsListAll', getAllProductsList)
router.get('/productsOne/:id/:name', getOneProduct)
router.get('/productList/:id', getProductsList)
router.put('/updateProductList/:id', updateProductList)
router.put('/updateProductStock/:id/:name/:status', updateProductStock)
router.get('/deleteProduct/:id', deleteProduct)

module.exports= {
    routes:router
}