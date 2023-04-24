import app from './app.js'
import * as dotenv from 'dotenv'

dotenv.config()

const {PORT} = process.env



const startServer = async()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
     console.log(error)   
    }
}
startServer()