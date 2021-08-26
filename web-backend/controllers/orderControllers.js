const Order = require('../models/orderModel');
const admin = require("firebase-admin");
const firestore = admin.firestore();


const addOrder = async(req, res) => {
    try {
        const data = req.body;
        await firestore.collection('orders').doc().set(data)
        res.send("Order added successfully")
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    addOrder
}