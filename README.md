# DevOps Interview

This blog post project contains both Frontend and Backend Application. This application contains two endpoints for posting and retrieving blog.

The API endpoints are:
* GET /api/posts
* POST /api/posts

## Getting Started

### Pre-requisites

- [Node 18](https://nodejs.org/en)

### Backend 

The Backend is created using [ExpressJS](https://expressjs.com) and [Serverless-http](https://github.com/dougmoscrop/serverless-http).

You can start by installing dependencies for Backend

```bash
cd backend
npm install
```
Build the backend

```
npm run build
```

The backend runs on serverless so will need to add serverless code for running.

### Frontend

The Frontend is created using [ReactJs](https://react.dev) and [NextJS](https://nextjs.org)

You can start by installing dependencies for Frontend

```bash
cd frontend
npm install
```

Build the frontend

```
npm run build
```

You can run the Frontend locally using

```bash
npm run dev
```
You can check https://localhost:8081 from your browser

For server use

```bash
npm run start
```

Versioning

We use [SemVer](http://semver.org/) for versioning.
