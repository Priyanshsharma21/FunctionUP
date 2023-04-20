import User from '../models/user.js'


export const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find()

        res.status(200).json({success : true, users : allUsers})

    } catch (error) {
        res.status(500).json({
            success: false,
            message : "Something went wrong"
        })
        console.log(error)
    }
}

export const signUp = async(req,res)=>{
    try {
        const {username,email,password,image} = req.body

        if(!username || !email || !password || !image) return

        const user = await User.create({username,email,password,image})
        
        res.status(200).json({
            success: true,
            user : user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : "Something went wrong"
        })
        console.log(error)
    }
}

