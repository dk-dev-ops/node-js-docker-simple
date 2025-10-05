1. package.json
{
  "name": "nodejs-docker-app",
  "version": "1.0.0",
  "description": "Simple Node.js app in Docker",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}

2. server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Docker App</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Hello from Node.js in Docker! 🚀</h1>
        <p>This is a sample app running inside a container.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

3. public/style.css (create a folder public and put this file inside)
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #f4f4f4;
  text-align: center;
  padding: 50px;
}

h1 {
  color: #00ffcc;
}

p {
  font-size: 18px;
}

4. Dockerfile
# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]

How to Run

Build Docker image:

docker build -t nodejs-docker-app .


Run container:

docker run -d -p 3000:3000 nodejs-docker-app


Open in browser:

http://localhost:3000
