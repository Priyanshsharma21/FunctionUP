import { persons } from '../const/index.js'


export const getAllPersons = (req, res) =>{
    res.status(200).json({success: true, persons : persons})
}

export const getAllEligiblePersons = (req, res) =>{
    const {age} = req.query

    const eligiblePersons = persons.filter((person,i)=>{
        if(person.age >= age){
            person.votingStatus = true
        }

        return person
    })

    const personWhoCanVote = []
    eligiblePersons.map((person)=>{
        if(person.votingStatus===true){
            personWhoCanVote.push(person.name)
        }
    })

    res.status(200).json({success: true,listOfVoters : personWhoCanVote, eligiblePersons : eligiblePersons})
}


