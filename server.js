const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); 
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send('This is a home page of Voting Application....')
})


// importing and using user route
const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

