import express from 'express';
import { io } from '../index';

const router = express.Router();
let reqCount = 1;

router.get('/', async (req, res) => {
  try {
    reqCount++;
    io.emit('counter-inc', {reqCount:reqCount});
    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
})

export default router;