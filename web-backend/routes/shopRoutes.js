const express= require('express')
const {addShop, getAllShops, getShop}= require('../controllers/shopController')


const router= express.Router();

router.post('/shop', addShop)
router.get('/shopsAll', getAllShops)
router.get('/shopOne/:id', getShop)
// router.put('/updateProductList/:id', updateProductList)


module.exports= {
    routes:router
}