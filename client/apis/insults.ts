import request from 'superagent'

const rootUrl = '/api/v1'


export function getAllInsults(): Promise<{ id: number, insult: string }[]> {
  return request
    .get(rootUrl + '/insults')
    .then((res) => res.body)
    .catch((err) => {
      console.error("Error fetching insults:", err)
      throw err
    })
}


export function getInsultById(id: number): Promise<{ id: number, insult: string }> {
  return request
    .get(`${rootUrl}/insults/${id}`)
    .then((res) => res.body)
    .catch((err) => {
      console.error("Error fetching insult:", err)
      throw err
    })
}


export function addInsult(insult: string, insultee_id: number, insulter_id: number): Promise<number> {
  return request
    .post(rootUrl + '/insults')
    .send({ insult, insultee_id, insulter_id })
    .then((res) => {
      const id = res.body.id
      if (typeof id === 'number') {
        return id
      } else {
        throw new Error("ID is not a number")
      }
    })
    .catch((err) => {
      console.error("Error adding insult:", err)
      throw err
    })
}


export function updateInsult(id: number, insult: string): Promise<void> {
  return request
    .put(`${rootUrl}/insults/${id}`)
    .send({ insult })
    .then(() => {})
    .catch((err) => {
      console.error("Error updating insult:", err)
      throw err
    })
}


export function deleteInsult(id: number): Promise<void> {
  return request
    .delete(`${rootUrl}/insults/${id}`)
    .then(() => {})
    .catch((err) => {
      console.error("Error deleting insult:", err)
      throw err
    })
}

export function getInsultsByUserId(insultee_id: number): Promise<{ id: number, insult: string }[]> {
  return request
    .get(`${rootUrl}/insults`)
    .query({ insultee_id })  
    .then((res) => res.body)
    .catch((err) => {
      console.error("Error fetching insults for user:", err)
      throw err
    })
}