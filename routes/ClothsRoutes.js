// clothsRoutes.js
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const ClothsModel = require('../models/ClothsModel');

// Cloths routes

router.get('/cloths', async(request,response)=>{
    const clothsData = await ClothsModel.findAll();

    response.status(200).json(clothsData);
});

router.post('/cloths', async (request,response)=>{
    const {name, category, price, descrip,
        imageurl, color, colorHex} = request.body;

    const newClothsData = ClothsModel.build({
        'name':name,
        'category':category,
        'price':price,
        'descrip':descrip,
        'imageurl':imageurl,
        'color':color,
        'colorHex':colorHex 
    })

    try{
        await newClothsData.save()

        response.status(201).json(newClothsData);
    }
    catch(error){
        response.json(error)
    }

});

router.get('/cloths/category/:categoryName', async (request, response) => {
    const { categoryName } = request.params; // Get the category name from the URL parameters

    try {
        // Fetch all cloths from the database that match the specified category
        const clothsInCategory = await ClothsModel.findAll({
            where: {
                category: categoryName
            }
        });

        // If cloths are found, send them back in the response
        if(clothsInCategory.length > 0) {
            response.status(200).json(clothsInCategory);
        } else {
            // If no cloths are found, send a 404 response
            response.status(404).send('No cloths found for the specified category.');
        }
    } catch (error) {
        // Handle any errors that occur during the database query
        response.status(500).json(error);
    }
});


router.get('/cloths/search', async (request, response) => {
    const { query } = request.query;

    try {
        const searchResults = await ClothsModel.findAll({
            where: {
                name: {
                    [Op.like]: `%${query}%`
                },
            }
        });

        response.status(200).json(searchResults);
    } catch (error) {
        console.error('Search error:', error);
        response.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/clothsid/:id', async (request,response)=>{
    const clothsData = await ClothsModel.findOne({
        where: {
            id:request.params.id
        }
    });

    response.status(200).json(clothsData)
});

router.patch('/clothsid/:id',async (request,response)=>{
    const clothsData = await ClothsModel.findOne({
        where: {
            id:request.params.id
        }
    });

    const {is_complete} = request.body;

    await clothsData.set(
        {
            is_complete:is_complete
        }
    )

    await clothsData.save();  

    response.status(200).json(clothsData);

});

router.put('/clothsid/:id', async(request,response)=>{
    const clothsData = await ClothsModel.findOne({
        where: {
            id:request.params.id
        }
    });

    const {name, category, price, descrip,
        imageurl, color, colorHex} = request.body;

    await clothsData.set(
        {
            name:name,
            category:category,
            price:price,
            descrip:descrip,
            imageurl:imageurl,
            color:color,
            colorHex:colorHex 
        }
    )

    await clothsData.save();  

    response.status(200).json(clothsData);
});

router.delete('/clothsid/:id', async(request,response)=>{
    const clothsData = await ClothsModel.findOne({
        where: {
            id:request.params.id
        }
    });

    await clothsData.destroy();

    response.status(204).json({});
});



module.exports = router;
