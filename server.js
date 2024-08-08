const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('This is a home page of Voting Application....')
})
app.get('/name',(req,res)=>{
    res.send('Very soon names will be listed in it...')
})
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})

