const { default: axios } = require('axios');
const express = require('express');
const app = express()
const path = require('path');


app.get('/', function(req,res){
    res.sendFile('globe.html', {root:__dirname});
});

app.get('/getCZML', async function(req,res){
    res.sendFile(path.resolve(__dirname,"../data/newCZML.czml"));
    //const result =  await axios.get("localhost/test")
    //res.send(result);
});

app.listen(process.env.PORT || 3000);