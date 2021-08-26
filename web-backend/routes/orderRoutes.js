const express = require('express')
const {
    addOrder
} = require('../controllers/orderControllers')

const router = express.Router()

router.post('/order', addOrder)

module.exports = {
    routes: router
}