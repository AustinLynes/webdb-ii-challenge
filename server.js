const express = require('express')
const server = express()
const carsRoute = require('./cars/carsRoute')
server.use(express.json())

server.use('/api/cars', carsRoute)

server.get('/',(req, res)=>{
    res.send(`<h1>Welcome to the Cars Api</h1>`)
})

module.exports = server