const express = require('express')
const {
    addOrder,
    getAllOrders,
    getOrdersByID
} = require('../controllers/orderControllers')

const router = express.Router()

router.post('/order', addOrder)
router.get('/orders/:shopID', getAllOrders)
router.get('/ordersById/:shopID/:userID', getOrdersByID)

module.exports = {
    routes: router
}