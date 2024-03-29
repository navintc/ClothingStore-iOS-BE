// billRoutes.js
const express = require('express');
const router = express.Router();
const BillModel = require('../models/BillModel');

// Bill routes

router.post('/bills', async (request,response)=>{
    const {name, payment, addressname, address1,
        address2, city, country, items} = request.body;

    const newBillData = BillModel.build({
        'name':name,
        'payment':payment,
        'addressname':addressname,
        'address1':address1,
        'address2':address2,
        'city':city,
        'country':country,
        'items':items
    })

    try{
        await newBillData.save()

        response.status(201).json(newBillData);
    }
    catch(error){
        response.json(error)
    }

});


module.exports = router;
