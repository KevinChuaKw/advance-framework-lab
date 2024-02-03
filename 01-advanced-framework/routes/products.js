const express = require('express');
const { Product } = require('../models');
const { createProductForm } = require('../forms');
const router = express.Router();

router.get('/', async function(req,res){
    // Same as SELECT * FROM products
    let products = await Product.collection().fetch();
    res.render('products/products',{
        products:products.toJSON()
    }) 
})

router.get('/create', async function(req,res){
    const ProductForm = createProductForm(); 
    res.render('products/create',{
        form: productForm.toHIML()
    })
})

module.exports = router;