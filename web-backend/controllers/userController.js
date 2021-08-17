const firebase=require('../db')
const User=require('../models/userModel')
const admin = require("firebase-admin");
const firestore=admin.firestore();

const addUser = async(req, res, next)=>{
    try{
        const data= req.body;
         await firestore.collection('buyers').doc().set(data)
        res.send('User added')
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUsers= async(req, res, next)=>{
    {
        try {
            const user = await firestore.collection('buyers');
            const data = await user.get();
            const usersArray = [];
            if(data.empty) {
                res.status(404).send('No products record found');
            }else {
                data.forEach(doc => {
                    const user = new User(
                        doc.data().name,
                        doc.id,
                    );
                    usersArray.push(user);
                });
                res.send(usersArray);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('buyers').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports ={
    addUser,
    getAllUsers, 
    getUser
}