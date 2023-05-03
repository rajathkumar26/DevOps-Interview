import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import postsRouter from './routes/posts.js';

app.use('/api/posts', postsRouter);

export const handler = serverless(app, {
    request: (request, event, context) => {
      return request;
    },
    response: (response, event, context) => {
      const statusCode = response.statusCode || 200;
      const headers = response.headers || {};
      const body = response.body || {};
      const isBase64Encoded = response.isBase64Encoded || false;
  
      return {
        statusCode,
        headers,
        body: isBase64Encoded ? body : JSON.stringify(body),
        isBase64Encoded,
      };
    },
  });
