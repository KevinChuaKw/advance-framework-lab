const bookshelf = require('../bookshelf')
// same as require ../bookshelf/index.js 

// Creating the first model 
// bookshelf.model() create a new model 
// A model represents one tbale in the databse
// 1st paramater: the NAME of the model
// 2nd parameter: configuration object 
// The name of the model should be singular of the
// table name and the first alphabet is uppercase 
const Product = bookshelf.model('Product', {
    tableName:'products'
});

module.exports = { Product };