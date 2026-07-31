# Docker Node.js App

A simple Node.js application containerized using Docker for learning and practice.

## Project Overview

This project demonstrates how to:

- Create a Node.js application
- Initialize a Node.js project with npm
- Write a Dockerfile
- Build a Docker image
- Run a Docker container
- Expose the application on port 3000

## Prerequisites

Before running this project, make sure you have:

- Docker installed
- Node.js and npm installed (for local development)
- Git installed
- Ubuntu/Linux environment (recommended)
- AWS EC2 instance (optional, for deployment)

## Technologies Used

- Node.js
- Docker
- Ubuntu
- AWS EC2
- Git
- GitHub

## Project Structure

text
docker-node-app/
├── app.js
├── package.json
├── Dockerfile
└── README.md


## Build the Docker Image

bash
docker build -t my-app .


## Run the Docker Container

bash
docker run -d --name my-container -p 3000:3000 my-app


## Useful Docker Commands

bash
docker images
docker ps
docker logs my-container
docker stop my-container
docker start my-container
docker rm my-container


## What I Learned

- Docker workflow
- Dockerfile instructions
- Building Docker images
- Running containers
- Host port vs Container port
- Docker logs and debugging
- Working with Docker on AWS EC2

## License

This project is created for learning and practice purposes.

