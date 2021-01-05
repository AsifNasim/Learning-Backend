const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    // creating fields for the collection
    name: {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }

});
// Compiling schema into a model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;