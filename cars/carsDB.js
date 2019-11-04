const db = require('../data/db')

//CREATE CRUD FOR CARS
function find() {
    return db('cars')
}
function findById(id) {

}
function insert(car) {
    return db('cars')
        .insert(car)
        .then(ids => ({ id: ids[0] }))
}
module.exports = {
    find,
    findById,
    insert
}