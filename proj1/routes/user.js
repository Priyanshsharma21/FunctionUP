import express from 'express'
import { signUp, getAllUsers } from '../controllers/user.js'


const router = express.Router()

router.get('/signup', getAllUsers)
router.post('/signup', signUp)

router.post('/signup', signUp)
router.post('/signup', signUp)

export default router