var fs    = require('fs');
var path  = require('path');

var pub = path.join(path.dirname(__filename), 'public')

var express = require('express');
var morgan  = require('morgan');


var app = express()
app.use(morgan('combined'))

app.get('/page-1.html', function(req, res){
  setTimeout(function (){
    res.writeHead(200, {headers: {'Content-type': 'text/html'}})
    fs.createReadStream(path.join(pub, 'page-1.html')).pipe(res)
  }, 2000)
})

app.get('/page-2.html', function(req, res){
  res.writeHead(200, {headers: {'Content-type': 'text/html'}})
  fs.createReadStream(path.join(pub, 'page-2.html')).pipe(res)
})

app.get('/slow.css', function(req, res){
  setTimeout(function (){
    res.writeHead(200, {headers: {'Content-type': 'text/css'}})
    fs.createReadStream(path.join(pub, 'page-1.html')).pipe(res)
  }, 2000)
})

app.listen(3000)
