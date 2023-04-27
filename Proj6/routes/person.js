import express from 'express';
import { getAllPersons,getAllEligiblePersons } from '../controllers/person.js'
const router = express.Router()

router.get('/persons', getAllPersons)
router.post('/voterperson/search', getAllEligiblePersons)


export default router