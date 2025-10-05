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
