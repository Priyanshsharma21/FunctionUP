import { mokeMovies,mockShows } from '../constants/index.js'

export const getAllMovies = async(req,res)=>{
    try {
        res.status(200).json({success:true, movies : mokeMovies})
    } catch (error) {
        res.status(500).json({success: false, error: error})
    }
}

export const getSingleMovie = async(req,res)=>{
    try {
        const {mid} = req.params
        const movieIndex = parseInt(mid) - 1;

        if (mid < 0 || mid > mokeMovies.length ){
            return res.json({message : "Please enter correct Index"})
        }

        const movie = mokeMovies[movieIndex];
        
        res.status(200).json({success:true, movie : movie})
    } catch (error) {
        res.status(500).json({success: false, error: error})
    }
}


export const getAllShows = async(req,res)=>{
    try {
        res.status(200).json({success:true, shows : mockShows})
    } catch (error) {
        res.status(500).json({success: false, error: error})
    }
}


export const getSingleShow = async(req,res)=>{
    try {
        const {sid} = req.params
        console.log(sid)
        const mainShow = mockShows.find((show,i)=>{
            return show.id == sid
        })

        if(!mainShow) return res.status(404).json({message : "No movie found, Try Other id"})

        
        res.status(200).json({success:true, show : mainShow})
    } catch (error) {
        res.status(500).json({success: false, error: error})
    }
}

