import express from 'express'
import { getAllMovies,getSingleMovie,getAllShows, getSingleShow } from '../controllers/movie.js'
const router = express.Router()


router.get('/movies', getAllMovies)
router.get('/movie/:mid', getSingleMovie)

router.get('/shows', getAllShows)
router.get('/show/:sid', getSingleShow)


export default router





