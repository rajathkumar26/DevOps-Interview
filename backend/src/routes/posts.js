import express from 'express';
import { v4 as uuid } from 'uuid';

const router = express.Router();

const posts = [];

router.get('/', (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ error: 'Title and content are required' });
    return;
  }

  const post = { id: uuid(), title, content };
  posts.push(post);

  res.status(201).json(post);
});

export default router;
