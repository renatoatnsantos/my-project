
const db = require('../db_conect')

const errorHandler = (error , msg , rejectFunc) =>{
    console.error(error)
    rejectFunc({error : msg})
}

const routes = require('../resources')({errorHandler , db})

module.exports = {
    info : () => routes ,
}