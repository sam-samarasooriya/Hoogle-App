/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('User', 'Insult').del()

  await knex('User').insert([
    {
      id: 1,
      user: 'Alice',
      profile_picture: 'alice.png',
      bio: 'Loves hiking and outdoor adventures.',
    },
    {
      id: 2,
      user: 'Bob',
      profile_picture: 'bob.png',
      bio: 'Avid reader and coffee enthusiast.',
    },
    {
      id: 3,
      user: 'Charlie',
      profile_picture: 'charlie.png',
      bio: 'Music producer by day, gamer by night.',
    },
    {
      id: 4,
      user: 'Diana',
      profile_picture: 'diana.png',
      bio: 'Travel blogger with a passion for photography.',
    },
    {
      id: 5,
      user: 'Eve',
      profile_picture: 'eve.png',
      bio: 'Foodie who loves to cook and share recipes.',
    },
    {
      id: 6,
      user: 'Frank',
      profile_picture: 'frank.png',
      bio: 'Tech geek and startup enthusiast.',
    },
    {
      id: 7,
      user: 'Grace',
      profile_picture: 'grace.png',
      bio: 'Yoga instructor and wellness advocate.',
    },
    {
      id: 8,
      user: 'Henry',
      profile_picture: 'henry.png',
      bio: 'A nature lover who enjoys birdwatching.',
    },
    {
      id: 9,
      user: 'Ivy',
      profile_picture: 'ivy.png',
      bio: 'Artist and aspiring novelist.',
    },
    {
      id: 10,
      user: 'Jack',
      profile_picture: 'jack.png',
      bio: 'Fitness trainer and nutrition expert.',
    },
  ])

  await knex('Insult').insert([
    {
      id: 1,
      insult: 'You are not as clever as you think!',
      insultee_id: 1,
      insulter_id: 2,
      likes: 5,
      dislike: 2,
    },
    {
      id: 2,
      insult: 'I have seen smarter rocks!',
      insultee_id: 2,
      insulter_id: 3,
      likes: 3,
      dislike: 1,
    },
    {
      id: 3,
      insult: 'Is that your best attempt at a comeback?',
      insultee_id: 3,
      insulter_id: 4,
      likes: 7,
      dislike: 4,
    },
    {
      id: 4,
      insult: 'Even your dog thinks you are embarrassing.',
      insultee_id: 4,
      insulter_id: 5,
      likes: 2,
      dislike: 6,
    },
    {
      id: 5,
      insult: 'You have the charm of a cactus.',
      insultee_id: 5,
      insulter_id: 6,
      likes: 8,
      dislike: 3,
    },
    {
      id: 6,
      insult: 'Your jokes are older than the internet.',
      insultee_id: 6,
      insulter_id: 7,
      likes: 6,
      dislike: 2,
    },
    {
      id: 7,
      insult: 'You are about as sharp as a marble.',
      insultee_id: 7,
      insulter_id: 8,
      likes: 4,
      dislike: 5,
    },
    {
      id: 8,
      insult: 'I would explain it to you, but I left my crayons at home.',
      insultee_id: 8,
      insulter_id: 9,
      likes: 9,
      dislike: 1,
    },
    {
      id: 9,
      insult: 'Your arguments are as empty as your wallet.',
      insultee_id: 9,
      insulter_id: 10,
      likes: 3,
      dislike: 4,
    },
    {
      id: 10,
      insult: 'You are living proof that even plants have more personality.',
      insultee_id: 10,
      insulter_id: 1,
      likes: 10,
      dislike: 2,
    },
  ])
}
