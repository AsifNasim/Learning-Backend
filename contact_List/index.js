const express = require('express');

const port = 8000;

const app = express();

app.use(express.static('public'));

app.get('/asifnasim', function(req, res){
    // res.sendFile('E:\Learning_Backend_Nodejs\contact_List\public\home.html');
    res.send('<h1>Congratulations Asif! You are making progress</h1>')
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
    }

    console.log("The express is running and up at port ", port);
})