import request from 'superagent'

const rootUrl = '/api/v1'

// GET: Fetch all users
export function getAllUsers(): Promise<{ id: number, user: string, profile_picture: string, bio: string }[]> {
  return request
    .get(rootUrl + '/users')
    .then((res) => res.body)
    .catch((err) => {
      console.error("Error fetching users:", err)
      throw err
    })
}

// GET: Fetch a specific user by ID
export function getUserById(id: number): Promise<{ id: number, user: string, profile_picture: string, bio: string }> {
  return request
    .get(`${rootUrl}/users/${id}`)
    .then((res) => res.body)
    .catch((err) => {
      console.error("Error fetching user:", err)
      throw err
    })
}

// POST: Add a new user
export function addUser(user: string, profile_picture: string, bio: string): Promise<number> {
  return request
    .post(rootUrl + '/users')
    .send({ user, profile_picture, bio })
    .then((res) => {
      const id = res.body.id
      if (typeof id === 'number') {
        return id
      } else {
        throw new Error("ID is not a number")
      }
    })
    .catch((err) => {
      console.error("Error adding user:", err)
      throw err
    })
}

// PUT: Update an existing user
export function updateUser(id: number, user: string, profile_picture: string, bio: string): Promise<void> {
  return request
    .put(`${rootUrl}/users/${id}`)
    .send({ user, profile_picture, bio })
    .then(() => {})
    .catch((err) => {
      console.error("Error updating user:", err)
      throw err
    })
}

// DELETE: Delete a user by ID
export function deleteUser(id: number): Promise<void> {
  return request
    .delete(`${rootUrl}/users/${id}`)
    .then(() => {})
    .catch((err) => {
      console.error("Error deleting user:", err)
      throw err
    })
}
