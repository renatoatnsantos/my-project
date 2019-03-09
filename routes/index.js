const express = require('express')
const router = express.Router()
const dep = require('../dependences')

router.get('/all', async (req, res)=>{
    try {
        res.send(await dep.info().all() )
    } catch (error) {
        console.log(error)
    }
})

router.post('/insert' , async (req, res)=>{
    const {name , departament ,  positive , negative} = req.body
    try {
        res.send(await dep.info().insert(name , departament ,  positive , negative))
    } catch (error){
        console.log(error)
    }

})


module.exports = router