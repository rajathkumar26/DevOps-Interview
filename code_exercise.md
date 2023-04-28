# Continous Integration and Deployment for Frontend and Backend

We would like to provide a site that end-user can post Blogs to this website. To enable this feature we have a Frontend component written with ReactJS and Backend component written with ExpressJs.

## Application Working

We can retrieve the Blog Post using the endpoint `GET /api/posts` and post a new Blog Post using `POST /api/posts`

more on [README.md](README.md)

## Your Challenge

We do not expect you will necessarily complete all the tasks! How you complete these tasks is entirely up to you.

1. Create a git repository and push the frontend/backend projects to it. Any code/config changes you make should be committed to this repository.
2. In the root folder of the project create configuration that will allow you to run the backend and frontend servers.
3. Create AWS Cloudformation templates for creating the Infrastrcture for Backend (mandatory) and Frontend (optional) application.
4. Use the AWS CICD to build and deploy your applications to the AWS environment
 
Note: The frontend server connects to the backend server by default on http://localhost:8000. You can change this by setting the NEXT_PUBLIC_API_URL environment variable.


Good luck!
