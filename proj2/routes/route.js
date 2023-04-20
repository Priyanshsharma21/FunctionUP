import express from 'express'
import { welcome } from '../logger/logger.js'
import { printDate,printMonth,getBatchInfo } from '../utils/helper.js'
import { lode } from '../utils/lode.js'
import { stringManipulator } from '../validator/formatter.js'
const router = express.Router()


router.get('/greet',welcome)
router.get('/text-me',(req,res)=>{
    const day = printDate()
    const month = printMonth()
    const batch = getBatchInfo()

    const data = lode()
    
    const {trimmedName,
        lowerName,
        upperName} = stringManipulator()

    res.status(200).json({
        success : true,
        day,month,batch,trimmedName,
        lowerName,
        upperName,
        data
    })
})



export default router