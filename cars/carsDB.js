const db = require('../data/db')

//CREATE CRUD FOR CARS
function find() {
    return db('cars')
}
function findById(id) {
    return db('cars').where('id', id).first()
}
function insert(car) {
    return db('cars')
        .insert(car)
        .then(ids => ({ id: ids[0] }))
}

function remove(id){
    return db('cars')
        .where('id', id)
        .del()
}
function update(id, changes){
    return db('cars')
        .update(changes)
        .where('id', id)
}
module.exports = {
    find,
    findById,
    insert,
    remove,
    update
}