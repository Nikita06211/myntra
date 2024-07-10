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
<<<<<<< HEAD

 
 

=======
>>>>>>> e0c7f2c221c52f128c44950a5ea17dee278b3a0f
mongoose.connect(mongodburl).then(()=>{
console.log('connected to database');
app.listen(port,()=>{
    console.log('listening')
})
}).catch((error) =>{
    console.log('error', error)
})

app.use('/images', imageRoutes);