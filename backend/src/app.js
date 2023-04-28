import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import postsRouter from './routes/posts.js';

app.use('/api/posts', postsRouter);

export const handler = serverless(app);
