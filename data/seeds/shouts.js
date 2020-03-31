
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoutouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoutouts').insert([
        {id: 1, shout: 'shout'}
      ]);
    });
};
