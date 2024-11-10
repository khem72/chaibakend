// require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hello world');
})
// app.get ('/login', (req,res)=>{
//     res.send("khem sing")
// })

app.listen(port, ()=>{
    console.log(`example  port of ${port}`)
})