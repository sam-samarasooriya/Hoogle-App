import { Router } from 'express';
import * as db from '../../server/db/users.ts';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await db.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, profile_picture, bio } = req.body; 
    const id = await db.addUser({ name, profile_picture, bio });
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(201);
  } catch (err) {
    next(err);
  }
});

export default router;
