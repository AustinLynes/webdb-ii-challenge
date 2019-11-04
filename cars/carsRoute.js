const express = require('express')
const router = express.Router()
const Cars = require('./carsDB')
//GET
router.get('/', (req, res) => {
    Cars.find()
    .then(car=>{
        res.json(car)
    }).catch(()=>{
        res.status(404).json({messege:'cars not found'})
    })
})
//POST
router.post('/', (req, res)=>{
    const car = req.body
    if(!car){
        res.status(400).json({message:'car information not found'})
    }else{
        Cars.insert(car).then(()=>{
            res.status(201).json({message:'car created successfully '})
        }).catch(()=>{
            res.status(500).json({message:'car is missing some required data'})
        })
    }
})

module.exports = router