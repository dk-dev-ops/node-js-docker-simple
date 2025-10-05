Node.js Docker App

A simple Node.js application running in a Docker container.
This app serves a basic webpage with a CSS file for styling.

📂 Project Structure
.
├── Dockerfile
├── package.json
├── server.js
└── public
    └── style.css

⚡ Features

Minimal Node.js server using Express

Serves a static CSS file

Runs inside a Docker container

Easy to deploy and extend

🛠 Prerequisites

Docker
 installed

Optional: Node.js
 for local testing

🚀 Quick Start
1. Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

2. Build Docker image
docker build -t nodejs-docker-app .

3. Run container
docker run -d -p 3000:3000 nodejs-docker-app

4. Open in browser
http://localhost:3000

🎨 Styling

The app uses a basic CSS file located at:

public/style.css


You can modify this file to change the appearance of the webpage.

📦 Dockerfile Overview
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

📝 License

This project is MIT Licensed.
