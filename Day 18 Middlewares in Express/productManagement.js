const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    isAuth = false;
    if (isAuth) {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
});

app.get('/', (req, res) => {
    res.send('example')
})

app.listen(3000, () => {
    console.log('listening in 3000')
})