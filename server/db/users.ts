import db from './connection';
import { User, UserData } from '../../models/user.ts';

export async function getAllUsers(): Promise<User[]> {
  return db('User').select();
}

export async function getUserById(id: number | string): Promise<User | undefined> {
  return db('User').select().first().where({ id });
}

export async function addUser(data: UserData): Promise<number> {
  const [id] = await db('User').insert(data);
  return id;
}
