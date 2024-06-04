
const express = require('express');
const app = express();
const port = 3000;
app.get('api/v1/welcome',(req,res)=>{
  res.send('Hello,World!');
});

app.get('api/v1/alumnos2',(req,res)=>{
  res.send('daniel 2');
});

app.get('api/v1/alumnos2',(req,res)=>{
  res.send('daniel 2');
});

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
});
