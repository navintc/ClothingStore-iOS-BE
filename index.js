const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const billRoutes = require('./routes/BillRoutes');
const clothsRoutes = require('./routes/ClothsRoutes');
const {sequelize,connectToDb} = require('./database/database');
const body_parser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', billRoutes);
app.use('/api', clothsRoutes);



app.use((request,response)=>{
    response.status(404);
    response.json({message:"404: Not found"});
})


app.use((request,response)=>{
    response.status(500);
    response.json({message:"500: Something went wrong"});
})

app.get('/',(request,response)=>{
    response.status(200).json({message:"200: Success"})
})

app.listen(PORT , async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
})