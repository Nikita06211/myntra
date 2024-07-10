const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors');
const  mongodburl=process.env.db_URL
const imageRoutes = require('./routes/ImageRoutes');
const mongoose=require('mongoose')
app.use(cors());
app.use(express.json())

// app.use('/images', express.static(path.join(__dirname, '/Images')));

app.get('/',(req,res) =>{
res.send("listening")
})
 const port =3000;
<<<<<<< HEAD
<<<<<<< HEAD
=======

 
 

>>>>>>> b033e30c76ec5c33bff26d6177406d4a59baf46b
=======
>>>>>>> 04937740880baab151e80092caade3557e1e37e9
mongoose.connect(mongodburl).then(()=>{
console.log('connected to database');
app.listen(port,()=>{
    console.log('listening')
})
}).catch((error) =>{
    console.log('error', error)
})

app.use('/images', imageRoutes);