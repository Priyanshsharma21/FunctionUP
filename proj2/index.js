import express from 'express'
import * as dotenv from 'dotenv'
import router from './routes/route.js'

dotenv.config()


const {
    PORT
} = process.env
const app = express()
app.use(express.json())


app.use('/api/v1/test', router)

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Started"
    })
})


const startServer = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`Running Up the hill at ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()