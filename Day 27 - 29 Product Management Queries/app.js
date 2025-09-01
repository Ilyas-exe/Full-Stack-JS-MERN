const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ProductRoutes = require('./routes/ProductRoutes')

app.use(express.json())



app.use('/products', ProductRoutes);


app.listen(3000, () => {
    console.log('server is listning in 3000')
});
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>console.log('Connected to MongoDB successfully!'))
.catch((error)=>console.log('MongoDB connection error:', error))