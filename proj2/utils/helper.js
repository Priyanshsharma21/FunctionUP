export const printDate = (req,res)=>{
    let currentDate = new Date()
    let day = currentDate.getDay()

    return day
}

export const printMonth = (req,res)=>{
    let currentDate = new Date()
    let month = currentDate.getMonth() + 1

    return month
}

export const getBatchInfo = (req,res)=>{
    const data = `Technetium, week 3 day 4, the topic for today is Nodejs module system`

    return data
}