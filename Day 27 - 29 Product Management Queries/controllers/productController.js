const { count } = require('console')
const Product = require('../models/ProductModel')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({price : -1}).limit(5)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.stockProducts = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $match: { inStock: true }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            },
        ]);
        res.status(200).json({ count: result[0].count })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
