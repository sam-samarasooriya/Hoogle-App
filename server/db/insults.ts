import db from './connection';
import { Insult, InsultData } from '../../models/insult';

export async function getAllInsults(): Promise<Insult[]> {
  return db('Insult').select();
}

export async function getInsultById(id: number | string): Promise<Insult | undefined> {
  return db('Insult').select().first().where({ id });
}

export async function addInsult(data: InsultData): Promise<number> {
  const [id] = await db('Insult').insert(data);
  return id;
}
