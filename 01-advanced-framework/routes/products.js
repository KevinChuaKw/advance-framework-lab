const express = require('express');
const { Product } = require('../models');
const router = express.Router();

router.get('/', async function(req,res){
    // Same as SELECT * FROM products
    let products = await Product.collection().fetch();
    res.render('products/products',{
        products:products.toJSON()
    }) 
})

module.exports = router;