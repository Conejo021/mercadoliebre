const express = require('express');
const app = express();
app.listen(process.env.PORT||3000, ()=>{
    console.log('Servidor Corriendo');
});

app.get('/',(req,res)=>{
    res.sendFile(_dirname +'/views/home.html');
});
app.get('/',(req,res)=>{
  res.sendFile(_dirname +'/views/login.html');
});
app.get('/',(req,res)=>{
    res.sendFile(_dirname +'/views/register.html');
});
