const firebase=require('../db')
const Product=require('../models/productModel')
const admin = require("firebase-admin");
const firestore=admin.firestore();

const addProduct = async(req, res, next)=>{
    try{
        const data= req.body;
         await firestore.collection('products').doc().set(data)
        res.send('Product added')
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllProducts= async(req, res, next)=>{
    {
        try {
            const product = await firestore.collection('products');
            const data = await product.get();
            const productsArray = [];
            if(data.empty) {
                res.status(404).send('No products record found');
            }else {
                data.forEach(doc => {
                    const product = new Product(
                        doc.id,
                        doc.data().name,
                        doc.data().quantity,
                        doc.data().price,
                    );
                    productsArray.push(product);
                });
                res.send(productsArray);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('Product with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product =  await firestore.collection('product').doc(id);
        await product.update(data);
        res.send('Product record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('products').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    addProduct,
    getAllProducts, 
    getProduct,
    updateProduct,
    deleteProduct
}