import express from 'express'
import personRoute from './routes/person.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1', personRoute)


export default app