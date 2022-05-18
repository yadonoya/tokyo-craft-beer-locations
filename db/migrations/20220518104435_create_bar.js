/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
      .createTable('bars', (table) => {
          table.increments('id').primary();
          table.string('bar_name', 64).notNullable();
          table.string('ward', 64).notNullable();
          table.string('station', 64).notNullable();
          table.boolean('smoking_allowed');
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('bars');
  };
  