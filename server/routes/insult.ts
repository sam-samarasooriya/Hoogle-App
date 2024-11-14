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
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(201);
      console.log(id)
  } catch (err) {
    next(err);
    console.log("error")
  }
});

export default router;
