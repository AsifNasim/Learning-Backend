const express = require('express');
const path = require('path');

const port = 8000;

const db = require('./config/mongoose');
const app = express();

app.set('view engine', 'ejs');
// views contains all the static/assets files
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static('public'));


// adding static files using middleware

app.use(express.static('assets'));

// Creating our own middleware
// MW 1

app.use(function(req, res, next){
    req.myName = "Asif Nasim";
    // console.log('MW 1 is called');

    next();
});
// MW 2
app.use(function(req, res, next){
    // console.log('MW 2 is called');
    console.log(`from MW 2 req object ${req.myName}`);
    next();
})
// middleware
app.use(express.urlencoded());

let contactList = [
    {
        name:"md",
        phone:"12345"
    },
    {
        name:"Asif",
        phone:"54321"
    },
    {
        name:"Nasim",
        phone:"67890"
    }
]

app.get('/', function(req, res){
    // res.sendFile('E:\Learning_Backend_Nodejs\contact_List\public\home.html');
    // res.send('<h1>Congratulations Asif! You are making progress</h1>')
    return res.render('home',{title:"Home Page"});
})

app.get('/asif', function(req, res){
    return res.render('profile',{title:"Profile Page"});
})

app.get('/practice', function(req, res){
    return res.render('practice',{
        title:"Let's Play"
    })
})

app.get('/contact', function(req, res){
    return res.render('contacts',{
        title:"Contacts Lists",
        contact_list:contactList
    })
})


app.post('/create-contact', function(req, res){
    console.log("from the post route control", req.myName)
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    // we can also use the body itself here
    contactList.push(req.body);
    

    // we can also use redirect('back') if we want to return to the same page
    return res.redirect('/contact');
    // return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone)
})

// app.put('/create-contact', function(req, res){
//     contactList.shift(contactList[0]);
//     return res.redirect('back');
// })
// Query params
// app.get('/delete', function(req, res){
//     // string params
// // app.get('/delete/:phone', function(req, res){
//     // string param
//     // console.log(req.params)
//     // let phone = req.params.phone;
//     // Query Params
//     console.log(req.query);
//     let phone = req.query.phone;

//     let contactIndex = contactList.findIndex( contact => contact.phone == phone);

//     if(contactIndex != -1){
//         contactList.splice(contactIndex, 1);
//     }

//     return res.redirect('back');
    
// })

app.get('/delete/', function(req, res){
    // get the query from the url
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
    }

    console.log("The express is running and up at port ", port);
})