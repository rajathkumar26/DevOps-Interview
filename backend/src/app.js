const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');

const app = express();

const posts = [];

app.use(cors());
app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ error: 'Title and content are required' });
    return;
  }

  const post = { id: uuid(), title, content };
  posts.push(post);

  res.status(201).json(post);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;