// userRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');


router.post('/users', async (request,response)=>{
    const {name, email, age, gender, passwd} = request.body;

    const hashedPassword = await bcrypt.hash(passwd, 10);

    const newUserData = UserModel.build({
        'name':name,
        'email':email,
        'age':age,
        'gender':gender,
        'passwd':hashedPassword,
    })

    try{
        await newUserData.save()
        response.status(201).json(newUserData);
    }
    catch(error){
        response.json(error)
    }
});

router.post('/login', async (request, response) => {
    const { email, passwd } = request.body;

    try {
        // Find the user by email
        const user = await UserModel.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        // Verify the password
        const passwordMatch = await bcrypt.compare(passwd, user.passwd);

        if (!passwordMatch) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }

        // Password is correct, user is authenticated
        response.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        response.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/users/:id', async (request, response) => {
    const { id } = request.params;
    const { name, email, age, gender, passwd } = request.body;

    try {
        // Find the user by id
        const user = await UserModel.findByPk(id);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        // Update user information
        user.name = name || user.name;
        user.email = email || user.email;
        user.age = age || user.age;
        user.gender = gender || user.gender;

        if (passwd !== undefined && passwd !== '') {
            // Hash the password if a new one is provided
            user.passwd = await bcrypt.hash(passwd, 10);
        }

        await user.save();

        response.status(200).json(user);
    } catch (error) {
        console.error('Update user error:', error);
        response.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
