import { players } from '../constant/index.js'
import fs from 'fs'

export const getMissingNumber = (req, res) => {
    let arr = [1,2,3,5,6,7] 
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    let missingNum = expectedSum - actualSum
  
    res.status(200).json({ success: true, missingNumber: missingNum });
};
  

  export const getAnywhereMissingNumber = (req, res) => {
    let arr = [44,45,47,48,49] 
    let n = arr.length;
    let expectedSum = ((arr[0] + arr[n - 1]) * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    let missingNum = expectedSum - actualSum;
  
    res.status(200).json({ success: true, missingNumber: missingNum });
  };
  

  export const getAllPlayers = (req, res) => {
      res.status(200).json({
        success: true,
        players : players
      })
  };
  

  export const createAPlayer =async(req, res) => {
      try {
        const newPlayer  = req.body

        players.push(newPlayer);

        res.status(200).json({success: true, newPlayer: newPlayer})

      } catch (error) {
        res.status(400).json({success: false, error: error})
      }
  };
  