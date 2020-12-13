const http = require('http');

const port = 8000;
// fs is a module in  nodejs which is used to read/write files
const fs = require('fs');



function requestHandler(req, res){
    // console.log(req.url);
    res.writeHead(200, {'content-type':'text/html'});

    let filePath;
    switch(req.url){
        case '/':
            filePath= './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
            break;
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            res.end('<h1>Error!</h1>');
            return;
        }

        res.end(data);
    });



    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         res.end('<h1>Error</h1>');
    //         return;
    //     }

    //     return res.end(data);

    // });

}  
// it will send the response back to the client/browser
    // res.end('Hola! Asif');


// it will create the server
const server = http.createServer(requestHandler);

// it will run the server and the first parameter to the func will always be error
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('Server is up and running at '+ port);
});