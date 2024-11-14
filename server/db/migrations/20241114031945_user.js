/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  await knex.schema.createTable('User', (table) => {
  
    table.integer('id').primary()
    table.string('user').notNullable()
    table.string('profile_picture')
    table.string('bio')
  })

 await knex.schema.createTable('Insult', (table) => {
    table.integer('id').primary()
    table.string('insult').notNullable()
    table.integer('insultee_id')
      // .unsigned()
      // .references('id')
      // .inTable('User')
      // .onDelete('CASCADE')
    table.integer('insulter_id')
      // .unsigned()
      // .references('id')
      // .inTable('User')
      // .onDelete('CASCADE')
    table.integer('likes').defaultTo(0)
    table.integer('dislike').defaultTo(0)
  })
}

/**
 * @param {import('knex').Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
  await knex.schema.dropTable('Insult')
  await knex.schema.dropTable('User')
}
