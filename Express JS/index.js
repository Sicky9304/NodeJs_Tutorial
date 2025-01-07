import express from 'express';

const app = express();
const port = process.env.port || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello About Page!</h1>');
});

app.get('/contact', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message"></textarea><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`);

});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





// By Using Powershell (mathod 1)
// Define PORT No in run time of application
// By Using Command Line Arguments

// $env:PORT=4000; node --watch index.js

// By Using Command Prompt (mathod 2)
// Define PORT No in run time of application
// By Using Command Line Arguments
//set PORT=5000 && node --watch index.js