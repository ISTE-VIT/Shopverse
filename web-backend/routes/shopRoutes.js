const express= require('express')
const {addShop, getAllShops, getShop}= require('../controllers/shopController')
// const {addProduct, getAllProducts, getProduct, updateProduct, deleteProduct}=require('../controllers/productControllers')

const router= express.Router();

router.post('/shop', addShop)
router.get('/shopsAll', getAllShops)
router.get('/shopOne/:id', getShop)


module.exports= {
    routes:router
}