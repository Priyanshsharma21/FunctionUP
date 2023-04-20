import mongoose from 'mongoose'


const connectDB = (URL)=>{
    try {
        mongoose.set('strictQuery', true)

        mongoose.connect(URL)
        .then(()=>console.log("Connected to DB"))
        .catch((err)=>console.log("Something went wrong"))

    } catch (error) {
        console.log(error)
    }
}

export default connectDB