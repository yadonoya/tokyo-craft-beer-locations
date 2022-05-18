/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bars').del()
  await knex('bars').insert([
    {bar_name: 'Ale House', ward: 'Toshima', station: 'Ikebukuro', smoking_allowed: true},
    {bar_name: 'Beer Brain', ward: 'Aoyama', station: 'Omotesando', smoking_allowed: false},
    {bar_name: 'BrewDog', ward: 'Roppongi', station: 'Roppongi', smoking_allowed: false},
    {bar_name: 'Craft Beer Tap', ward: 'Chiyoda', station: 'Akihabara', smoking_allowed: false},
  ]);
};