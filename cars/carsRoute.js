const express = require('express')
const router = express.Router()
const Cars = require('./carsDB')
//GET
router.get('/', (req, res) => {
    Cars.find()
        .then(car => {
            res.json(car)
        }).catch(() => {
            res.status(404).json({ messege: 'cars not found' })
        })
})
//POST
router.post('/', (req, res) => {
    const car = req.body
    if (!car) {
        res.status(400).json({ message: 'car information not found' })
    } else {
        Cars.insert(car).then(() => {
            res.status(201).json({ message: 'car created successfully ' })
        }).catch(() => {
            res.status(500).json({message: 'uh oh.... '  })
        })
    }
})
//getby
router.get('/:id', (req, res) => {
    const {id} = req.params
    Cars.findById(id)
        .then((_car) => {
            if (!_car) {
                res.status(400).json({ message: 'car information not found' })
            } else {

                res.status(200).json(_car)
            }
        }).catch(() => {
            res.status(500).json({ message: 'uh oh.... '  })
        })
}
)
//delete
router.delete('/:id', (req, res) => {
    const {id} = req.params
    Cars.remove(id)
        .then((_car) => {
            if (!_car) {
                res.status(400).json({ message: 'car information not found' })
            } else {

                res.status(200).json({ message: 'car removed success',_car})
            }
        }).catch(() => {
            res.status(500).json({ message: 'uh oh.... ' })
        })
})
//update
router.put('/', (req, res) => {
    const {id} = req.params
    const {changes} = req.body
    Cars.update(id, changes)
        .then((_car) => {
            if (!_car) {
                res.status(400).json({ message: 'car information not found' })
            } else {

                res.status(200).json({ message: 'car updated success',_car})
            }
        }).catch(() => {
            res.status(500).json({ message: 'uh oh.... ' })
        })
})

module.exports = router