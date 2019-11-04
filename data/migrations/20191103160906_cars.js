
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.integer('VIN')
            .notNullable()
            .unique()
        tbl.text('make', 30)
            .notNullable()
        tbl.text('model', 30)
            .notNullable()
        tbl.integer('mileage')
            .notNullable()
        tbl.text('transmission')
        tbl.text('title')
    })
};
//VIN, make, model, and mileage.
//

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
