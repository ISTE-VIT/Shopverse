const firebase = require('../db')
const Shop = require('../models/shopModel')
const admin = require("firebase-admin");
const firestore = admin.firestore();

const addShop = async(req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('sellers').doc().set(data)
        res.send('Shop added')
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getAllShops = async(req, res, next) => {
    {
        try {
            const shop = await firestore.collection('sellers')
            const data = await shop.get();
            const shopsArray = [];
            if (data.empty) {
                res.status(404).send('No shpops record found');
            } else {
                data.forEach(doc => {
                    const shop = new Shop(
                        doc.data().shopname,
                        doc.data().email,
                        doc.data().phone_number,
                        doc.id,
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

const getShop = async(req, res, next) => {
    try {;
        // const id = req.params.id;
        const email = req.params.email;
        const shop = await firestore.collection('sellers');
        const data = await shop.get();
        data.forEach(doc=>{
            if(doc.data().email===email)
            {
                 return res.send(doc.data().uid)
            }
        })
        if (!data.exists) {
            return(res.status(404).send('Shop with the given ID not found'))
            
        } 
        // else {
        //     res.send(data.data());

        // }
    } catch (error) {
       return( res.status(400).send(error.message))
    }
}



module.exports = {
    addShop,
    getAllShops,
    getShop
}