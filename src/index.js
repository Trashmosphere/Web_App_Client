const express = require('express');
const app = express()
const path = require('path');


app.get('/', function(req,res){
    res.sendFile('globe.html', {root:__dirname});
});

app.get('/getCZML', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/newCzml.czml"));
});

app.get('/getCZML1', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML2', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML3', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML4', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML5', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML6', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});

app.get('/getCZML7', function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/orbit.czml"));
});
app.listen(process.env.PORT || 3000);