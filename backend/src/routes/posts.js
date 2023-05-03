import express from 'express';
import { v4 as uuid } from 'uuid';

const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(posts),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  res.send(response);
});

router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({ error: 'Title and content are required' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    res.send(response);
    return;
  }

  const post = { id: uuid(), title, content };
  posts.push(post);

  const response = {
    statusCode: 201,
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  res.send(response);
});

export default router;
