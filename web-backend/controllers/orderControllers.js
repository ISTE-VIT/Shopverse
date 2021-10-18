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

const getAllOrders = async(req, res, next) => {
    {
        try {
            const orders = await firestore.collection('orders')
            const data = await orders.get();
            const ordersArray = [];
            if (data.empty) {
                res.status(404).send('No orders record found');
            } else {
                data.forEach(doc => {
                    const order = new Order(
                        doc.data().userID,
                        doc.data().name,
                        doc.data().quantity, 
                        doc.data().product,
                        doc.data().shopID,
                    );
                    ordersArray.push(order);
                });
                res.send(ordersArray);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}
const getOrdersByID = async(req, res, next) => {
    {
        try {
            const orders = await firestore.collection('orders')
            const data = await orders.get();
            const ordersArray = [];
            if (data.empty) {
                res.status(404).send('No orders record found');
            } else {
                data.forEach(doc => {
                    const order = new Order(
                        doc.data().userID,
                        doc.data().name,
                        doc.data().quantity, 
                        doc.data().product,
                        doc.data().shopID,
                    );
                    ordersArray.push(order);
                });
                res.send(ordersArray);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}




module.exports = {
    addOrder,
    getAllOrders,
    getOrdersByID
}