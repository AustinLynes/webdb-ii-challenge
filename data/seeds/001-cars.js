
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
          {
            'VIN':67946504926594367265482,
            'make':'Chevrolet',
            'model':'Corvette',
            'mileage':127576,
            'title':'Clean',
            'transmission':'Manual'
          },
          {
            'VIN':67900000492659436726548,
            'make':'Ford',
            'model':'Mustang',
            'mileage':150069,
            'title':'Salvage',
            'transmission':'Automatic'
          },
          {
            'VIN':679000004988886726548,
            'make':'Dodge',
            'model':'Dart',
            'mileage':178061,
            'title':'Salvage'
          },
          {
            'VIN':6790000049266666666726548,
            'make':'Shelby',
            'model':'Cobra',
            'mileage':000124,
            'transmission':'Manual'
          },
          {
            'VIN':6790000444444666666726548,
            'make':'BMW',
            'model':'E46-5I',
            'mileage':100199,
            'transmission':'Manual'
          }
      ]);
    });
};
