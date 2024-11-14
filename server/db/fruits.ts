import db from './connection.ts'
import { Fruit, FruitData } from '../../models/userInterface.ts'

export async function getAllFruits() {
  const fruit = await db('fruit').select()
  return fruit as Fruit[]
}

export async function getFruitById(id: number | string) {
  const fruit = await db('fruit').select().first().where({ id })
  return fruit as Fruit
}

export async function addFruit(data: FruitData) {
  const [id] = await db('fruit').insert(data)
  return id
}
