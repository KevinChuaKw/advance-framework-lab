const express = require('express');
// create a new Router object
const router = express.Router();

router.get('/', function(req,res){
    res.send("Welcome");
})

router.get('/about-us', function(req,res){
    res.send("about-us")
})

router.get("/contact-us", function(req,res){
    res.send("Contact Us");
})

module.exports = router;