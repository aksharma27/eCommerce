const express = requires('express');
require('dotenv').config({path: "../config.env"});
const PORT = 3000;






//middlewares
const app = express();






//routes
app.get('/', (req, res)=>{
    res.send("Landing Page of E-Commerce website");
});
app.get('/home', (req, res)=>{
    res.send("Home page of E-commerce website");
});






app.listen(PORT,()=>{
    console.log(`listening on : ${PORT}`);
});