import express from 'express'
import * as dotenv from 'dotenv'
import userRouter from './routes/user.js'
import connectDB from './config/connectDB.js'

dotenv.config()
const {MONGODB_URL, PORT} = process.env

const app = express();



app.use(express.json())
app.use('/api/v1',userRouter)


app.get('/greet',(req,res)=>{
    res.send("Hello")
})



const startServer = async()=>{
    try {
        connectDB(MONGODB_URL)
        app.listen(PORT,()=>{console.log("App running at port 3000")})
    } catch (error) {
        console.log(error)
    }
}

startServer()