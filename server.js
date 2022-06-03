// DEPENDENCIES
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const inputController = require('./controllers/input.js');
const messagesController = require('./controllers/messages');
const methodOverride = require('method-override');


// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/input', inputController);
app.use('/messages', messagesController);
app.use(express.static(__dirname + '/public'));




// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs');
});















// LISTENER
app.listen(3000, () => {
    console.log('listening....');
});