import express from 'express'
import { getMissingNumber,getAnywhereMissingNumber,createAPlayer,getAllPlayers } from '../controllers/main.js'
const router = express.Router();


router.get('/missnum', getMissingNumber)
router.get('/anymissnum', getAnywhereMissingNumber)

router.get('/players', getAllPlayers);
router.post('/player', createAPlayer)



export default router