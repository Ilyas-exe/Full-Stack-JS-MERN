// app.js

const express = require('express');
const router = express.Router(); // You can keep this or just use app directly

// 1. Create the main Express application instance
const app = express(); 

// Import your student routes
const studentRoutes = require('./routes/student.routes.js');

// 2. Mount the student routes on the /students path
//    The router is middleware, so use app.use()
app.use('/students', studentRoutes);

// 3. Start the server by calling .listen() on the 'app' instance
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});