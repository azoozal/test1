const express = require('express');

const mongoose = require('mongoose');

const app = express();

const port = process.env.port || 5000;


app.get('/', (req,res)=>res.send('hello'));
app. listen(port,()=>console.log(`server running on port ${port}`));
