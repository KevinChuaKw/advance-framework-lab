const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// import all the dependencies for sessison
const session = require('express-session');
const flash = require('connect-flash');
const FileStore = require('session-file-store')(session);

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

// set up sessions
app.use(session({
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true // this is for the browers to issue a new session when there is no pre existing session
}))

// enable flash messaging
app.use(flash())


app.use(function (req,res, next){
  res.locals.succcess_messages = req.flash("success_messages");
  res.locals.error_messages = req.flash("error_messages");
  next(); 
})

const landingRoutes = require('./routes/landing.js')
// You need the './' when doing up the routes so express knows 
// that you are looking for the folder in the current directory
const productRoutes = require('./routes/products')

async function main() {
    // if the requested url 
    // begins with '/', send it
    // to the correspoding router
    app.use('/', landingRoutes);  
    app.use('/products', productRoutes);   
    
}

main();

// Keeping the code alive 

app.listen(3000, () => {
  console.log("Server has started");
});



