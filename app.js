//
const express = require('express');
const app = express();
const users = require('./server/routes/users')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 5035;
/// mongodb express react nodejs 
// handle route
app.use('/', users)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//set up mongose
app.listen(PORT, ()=>{
    console.log(`Our Server is running in PORT ${PORT}`)
})

