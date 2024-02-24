const express = require('express');
const router = express.Router();

const productDatalayer = require('../../dal/products');

router.get ('/', async function (req,res){
    const allProducts = await productDataLayer
})

