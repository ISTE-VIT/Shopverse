const firebase = require('../db')
const Product = require('../models/productModel')
const admin = require("firebase-admin");
const firestore = admin.firestore();

const addProduct = async(req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('products').doc().set(data)
        res.send('Product added')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProductsList = async(req, res, next) => {

    try {
        const product = await firestore.collection('products');
        const data = await product.get();
        const productsArray = [];
        if (data.empty) {
            res.status(404).send('No products record found');
        } else {
            data.forEach(doc => {
                const product = new Product(
                    doc.data().name,
                    doc.data().price,
                    doc.data().quantity,
                    doc.data().shopID,

                );
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }

}

const getProductsList = async(req, res, next) => {
    try {
        const product = await firestore.collection('products');
        const ID = req.params.id
        const data = await product.get();
        const productsArray = [];
        if (data.empty) {
            res.status(404).send('No products record found');
        } else {
            data.forEach(doc => {
                if (doc.data().shopID === ID) {
                    const product = new Product(
                        doc.data().name,
                        doc.data().price,
                        doc.data().quantity,
                        doc.data().shopID,
                    );
                    productsArray.push(product);
                }
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//might be required to fix
const getOneProduct = async(req, res, next) => {
    try {
        const ID = req.params.id;
        const name = req.params.name
        const product = await firestore.collection('products');
        const data = await product.get()
        data.forEach(doc => {
            if (doc.data().shopID === ID && doc.data().name === name) {
                res.send(doc.data())
            }
        })
    } catch (error) {
        res.send(error)
    }
}

const updateProductStock = async(req, res, next) => {
    try {
        const ID = req.params.id;
        const newdata = req.body
        const product = await firestore.collection('products').doc(ID);
        await product.update(newdata)
        res.send('Product Stock Updated Successfully');

    } catch (error) {
        res.send(error)
    }
}

const deleteProduct = async(req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('products').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProductsList,
    getProductsList,
    getOneProduct,
    updateProductStock,
    deleteProduct
}