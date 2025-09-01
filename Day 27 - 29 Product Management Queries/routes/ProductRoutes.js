const ProductController = require('../controllers/productController.js')
const express = require('express')
const router = express.Router()

router.get('/', ProductController.getAllProducts)
router.get('/stockProducts', ProductController.stockProducts)

module.exports = router;