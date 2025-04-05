const http = require('http');
const path = require('path');
const fs = require('fs');

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);

const pathToStyle = path.join(__dirname, 'static', 'style.css');
const StyleCssFile = fs.readFileSync(pathToStyle);

const pathToStyl = path.join(__dirname, 'static', 'script.js');
const StyleCssFil = fs.readFileSync(pathToStyl);

const  server = http.createServer((req, res) =>{
    if(req.url === '/'){
        return res.end(indexHtmlFile);
    };
    if(req.url === '/style.css'){
        return res.end(StyleCssFile);
    };
    if(req.url === '/script.js'){
        return res.end(StyleCssFil);
    };
    


    res.statusCode = 404;
    return res.end('Error 404');
});

server.listen(3000);