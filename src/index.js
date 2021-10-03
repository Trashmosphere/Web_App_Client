const { default: axios } = require('axios');
const express = require('express');
const app = express()
const path = require('path');


app.get('/', function(req,res){
    res.sendFile('globe.html', {root:__dirname});
});

app.get('/getCZML',  function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/newCzml.czml"));
});

app.listen(process.env.PORT || 3000);