# Proyect in Node.js 🌎

This is a basic program in Node.js that displays a "Hello World" message on the web. The project uses Docker and has also been deployed on Heroku using the `test` branch.

## Prerequisites

Before you begin, make sure you have **Node.js** installed on your system. You can download it from the official website:

[Download Node.js](https://nodejs.org)


## Project Cloning

To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/jdhidal/App-Node.git
```

## Installation of Dependencies

Navigate to the project directory and run the following command to install the necessary dependencies:

```bash
cd App-Node
npm install express
```

## Run Locally

To run the project locally on your machine:

1. **Navigate to the project directory**:
```bash
cd App-Node
```

2. **Start the application**:
```bash
npm start
```
This will make the application available at http://localhost:3000

## Build and Run with Docker

1. Build the Docker image: Make sure you are in the project directory and then run:
```bash
docker build -t app-node .
```

2. Run the container: Once the image is built, you can run the container:
```bash
docker run -p 3000:3000 app-node
```
This will make the application available at http://localhost:3000

## Docker Hub

The image for this project is also available on Docker Hub, allowing you to run it without needing to build it locally. You can get it by running:

```bash
docker pull jdhidalgo673/app-node:latest
```

```bash
docker run -p 3000:3000 jdhidalgo673/app-node:latest
```
This will make the application available at http://localhost:3000

## Deployment to Heroku

This project is deployed on Heroku, so you can access the application directly at the following link:

[Visit the Heroku website](https://app-nodes-b862f5eff1b2.herokuapp.com/)



Thanks for exploring this Hello World project in Node.js! 😊