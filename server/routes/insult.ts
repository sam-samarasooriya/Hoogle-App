import { Router } from 'express';
import * as db from '../../server/db/insults.ts';

const router = Router();


router.get('/', async (req, res) => {
  try {
    const insults = await db.getAllInsults();
    res.json(insults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


router.get('/user', async (req, res) => {  
  const { insultee_id } = req.query;
  if (!insultee_id) {
    return res.status(400).json({ error: 'Insultee ID is required' });
  }

  try {
    const insults = await db.getInsultsByUserId(Number(insultee_id));
    res.json(insults);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch insults' });
  }
});


router.get('/:id', async (req, res, next) => {
  try {
    const insult = await db.getInsultById(req.params.id);
    res.json(insult);
  } catch (err) {
    next(err);
  }
});


router.post('/', async (req, res, next) => {
  try {
    const { insult, insultee_id, insulter_id, likes, dislike } = req.body;
    const id = await db.addInsult({ insult, insultee_id, insulter_id, likes, dislike });
    
    
    res.status(201).json({ id });
    console.log("Inserted ID:", id); 
  } catch (err) {
    next(err);
    console.log("Error adding insult:", err);
  }
});

export default router;