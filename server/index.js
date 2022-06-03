
import userRoutes from  './routes/user.js'
import  itemRoutes from './routes/item.js'
import mongoose from 'mongoose'
import  express from 'express'
import cors from 'cors'
const  app= new express()
const mongodb='mongodb+srv://root:root@cluster0.uu7r7.mongodb.net/orangesummercamp?retryWrites=true&w=majority'

const PORT = process.env.PORT||8000

//middelware
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/users',userRoutes)
app.use('/items',itemRoutes)
app.get("/",(req,res)=>{
  res.send('welocme to server');
})
mongoose.connect(mongodb).then(()=>{
app.listen(PORT,()=>{
    console.log("server is running ")
})
}).catch((err)=>{
    console.log(err);
})