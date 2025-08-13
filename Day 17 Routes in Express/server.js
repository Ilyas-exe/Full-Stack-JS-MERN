const express = require('express')
const add = express()

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

add.get('/products', (req, res) => {
    res.send(products)
})

add.get('/products/search', (req, res) => {
    const { minPrice } = req.query
    const { maxPrice } = req.query

    res.send(products.filter(product => product.price > minPrice && product.price < maxPrice))
})
add.get('/products/:id', (req, res) => {
    res.send(products.filter(product => {
        return product.id == req.params.id
    }))
})

add.post('/products',(req,res)=>{
    products.push(req.body)
    res.send('the products pushed')
})


add.listen(3000, () => {
    console.log('listening in port 3000')
})
