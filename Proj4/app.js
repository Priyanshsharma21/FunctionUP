import express from 'express'
import movieRouter from './routes/movie.js'


const app = express()


// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//route middlewares
app.use('/api/v1',movieRouter)

export default app