export const stringManipulator = ()=>{
    let name = "        Khelona Bana Khalnayak Tatia Bicchu       "
    let trimmedName = name.trim()

    let lowerName = name.toLowerCase()
    let upperName = name.toUpperCase()



    return {
        trimmedName,
        lowerName,
        upperName
    }

}