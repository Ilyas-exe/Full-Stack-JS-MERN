const express = require('express');
const mongoose = require('mongoose')
const studentRoutes = require('./routes/student.routes.js')

const app = express();
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>console.log('Connected to MongoDB successfully!'))
.catch((error)=>console.log('MongoDB connection error:', error))


app.use('/students', studentRoutes);


app.listen(3000, () => {
    console.log('server is listning in 3000')
});
