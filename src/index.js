const { default: axios } = require('axios');
const express = require('express');
const app = express()
const path = require('path');


app.get('/', function(req,res){
    res.sendFile('globe.html', {root:__dirname});
});

app.get('/getCZML',  async function(req,res){
    try{
    const result = await axios.get('http://34.79.72.147:5000/getData')
    res.send(result.data)
    }catch(e)
    {
        res.send(e)
        console.log(e)
    }
});

app.listen(process.env.PORT || 3000);