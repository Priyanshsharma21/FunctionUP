import express from 'express'
import mainRoute from './routes/main.js'

const app = express()

// normal middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes middlewares
app.use('/api/v1',mainRoute)


export default app