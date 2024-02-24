




// Endpoint for stripe to consume when payment is successful 
router.post("/process_payment", express.raw({
    type:"application/json"
}),async function (req,res){
    // extract the payload 
    const payload = req.body; 

    // need to verify the request is from stripe
    // we can verify by checking the signiture in the headers 
    const sigHeader = req.headers["stripe-signiture"]; 
    const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET; 
    let event; 
    try {
        event = stripe.webhooks.constructEvent(payload, sigHeader,endpointSecret);
        if (event.type == "checkout")
    } catch (e) {

    }
}); 

module.exports = router;