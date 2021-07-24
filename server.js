const express=require('express');
const app= express();
const dbConnect=require('./config/dbConnect')
dbConnect();
app.use(express.json());
 app.use('/project',require('./routes/project'));
 app.use('/task',require('./routes/task'));
 app.use('/register',require('./routes/register'));
 app.use('/login',require('./routes/login'));
 app.use('/post',require('./routes/post'));
//run the server 
app.listen(5000,()=>console.log("server is running"))