// acquiring the library
const mongoose = require('mongoose');
// connect to the db
mongoose.connect('mongodb://localhost/contact_list_db');
// acquire the connection , to check if it is successful
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console,'error connecting to DataBase'))
// up and running then print the message
db.once('open', function(){
    console.log('successfully connected to db');
})

