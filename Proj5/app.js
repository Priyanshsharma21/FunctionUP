import express from 'express'
import missRouter from './routes/miss.js'

const app = express()

// normal middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes middlewares
app.use('/api/v1',missRouter)


export default app