

export async function seed(knex) {

    await knex('user').del();
    await knex('insult').del();

    await knex('user').insert([
      { id: 1, user: 'Alice', profile_picture: 'https://example.com/alice.jpg', bio: 'Lover of fruits and funny insults!' },
      { id: 2, user: 'Bob', profile_picture: 'https://example.com/bob.jpg', bio: 'Professional insult generator.' },
      { id: 3, user: 'Charlie', profile_picture: 'https://example.com/charlie.jpg', bio: 'I laugh at bad jokes.' },
    ]);
  

    await knex('insult').insert([
      { id: 1, insult: 'You’re as bright as a black hole, but with none of the charm.', insultee_id: 1, insulter_id: 2, likes: 5, dislike: 2 },
      { id: 2, insult: 'I’d agree with you, but then we’d both be wrong.', insultee_id: 2, insulter_id: 1, likes: 3, dislike: 1 },
      { id: 3, insult: 'Your secrets are always safe with me. I never even listen when you tell me them.', insultee_id: 3, insulter_id: 2, likes: 7, dislike: 0 },
    ]);
  }
  