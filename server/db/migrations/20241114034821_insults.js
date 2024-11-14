/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable('User', (table) => {
      table.increments('id').primary();
      table.string('user').notNullable();
      table.string('profile_picture');
      table.string('bio');
    });
  
    await knex.schema.createTable('Insult', (table) => {
      table.increments('id').primary();
      table.string('insult').notNullable();
      table.integer('insultee_id').unsigned().references('id').inTable('User').onDelete('CASCADE');
      table.integer('insulter_id').unsigned().references('id').inTable('User').onDelete('CASCADE');
      table.integer('likes').defaultTo(0);
      table.integer('dislike').defaultTo(0);
    });
  }
  
  /**
   * @param {import('knex').Knex} knex
   */
  export async function down(knex) {
    await knex.schema.dropTableIfExists('Insult');
    await knex.schema.dropTableIfExists('User');
  }
  