const firebase=require('../db')
const Shop=require('../models/productModel')
const admin = require("firebase-admin");
const firestore=admin.firestore();

const addShop = async(req, res, next)=>{
    try{
        const data= req.body;
         await firestore.collection('sellers').doc().set(data)
        res.send('Shop added')
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllShops= async(req, res, next)=>{
    {
        try {
            const product = await firestore.collection('sellers');
            const data = await product.get();
            const shopsArray = [];
            if(data.empty) {
                res.status(404).send('No shops record found');
            }else {
                data.forEach(doc => {
                    const shop = new Shop(
                        doc.id,
                        doc.data().shopname,

                    );
                    shopsArray.push(shop);
                });
                res.send(shopsArray);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const getShop = async (req, res, next) => {
    try {
        const id = req.params.id;
        const shop = await firestore.collection('sellers').doc(id);
        const data = await shop.get();
        if(!data.exists) {
            res.status(404).send('Shop with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// const updateShop = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         const shop =  await firestore.collection('sellers').doc(id);
//         await shop.update(data);
//         res.send('Shop record updated successfuly');        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

// const deleteShop = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         await firestore.collection('sellers').doc(id).delete();
//         res.send('Record deleted successfuly');
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

module.exports ={
    addShop,
    getAllShops, 
    getShop,
    // updateShop,
    // deleteShop
}