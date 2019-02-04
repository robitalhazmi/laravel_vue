// Main server
var express = require('express');
// Set up MongoDB database
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

// Require ItemRoutes file
var itemRouter = require('./routes/itemRoutes');

// Set view engine
app.set('view engine', 'ejs');

// Serving static files from serve
app.use(express.static('public'));
// Create routes
app.use('/items', itemRouter);
// Parses dta to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log('Server is running on port:', port);
});

// Set up a routing
app.get('/', function(req, res){
    res.render('index');
});

// Connect wtich Mongo database
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://<admin>:<password>admin@127.0.0.1:27017/aufinancex')
    .then(() => { // if all is ok we will be here
        console.log('Connected');
    })
    .catch(err => { // if error we will be here
        process.exit(1);
    });