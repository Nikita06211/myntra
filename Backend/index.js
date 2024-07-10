const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors');
const  mongodburl=process.env.db_URL
const imageRoutes = require('./routes/ImageRoutes');
const mongoose=require('mongoose')
app.use(cors());
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, '/Images')));

app.get('/',(req,res) =>{
res.send("listening")
})
 const port =3000;
mongoose.connect(mongodburl).then(()=>{
console.log('connected to database');
app.listen(port,()=>{
    console.log('listening')
})
}).catch((error) =>{
    console.log('error', error)
})

app.use('/images', imageRoutes);