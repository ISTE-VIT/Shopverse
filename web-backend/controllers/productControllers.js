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

const getAllProductsList= async(req, res, next)=>{
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
                        doc.data().name,
                        doc.data().products,

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

const getProductsList = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('Product with the given ID not found');
        }else {
            res.send(data.data().products);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneProduct= async(req, res, next)=>{
    try {
        const id=req.params.id;
        const name=req.params.name
        const product= await firestore.collection('products').doc(id);
        const data= await product.get()
        data.data().products.forEach(map=>{
            if(map.name===name)
            {
                res.send(map)
            }
        })
    } catch(error){
        res.send(error)
    }
}

const updateProductStock= async(req, res, next)=>{
    try {
        const id=req.params.id;
        const name=req.params.name
        const status=req.params.status
        const product= await firestore.collection('products').doc(id);
        const data= await product.get()
        data.data().products.forEach(map=>{
            if(map.name===name)
            {
                if(status==="add")
                {
                    map.quantity.update(map.quantity+1)
                    // data.data().products.update({
                    //     map
                    // })
                    console.log("Stock increased")
                }
                if(status==="remove")
                {
                    map.quantiy=map.quantity-1
                    map.update({
                        quantiy:newQuantity
                    })
                    console.log("Stock decreased")
                }
                res.send(map)
            }
        })
    } catch(error){
        res.send(error)
    }
}


const updateProductList = async (req, res, next) => {
    try {
        const id = req.params.id;
        var data = req.body;
        const product =  await firestore.collection('products').doc(id);
        const productsArray=await product.get()
        var child=productsArray.data().products.concat(data)
        console.log(child)
        await product.update({
            products:child
        });
        res.send('Product record updated successfuly');     
    } catch  {
        res.status(400).send("Error message");
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
    getAllProductsList, 
    getProductsList,
    getOneProduct,
    updateProductList,
    updateProductStock,
    deleteProduct
}