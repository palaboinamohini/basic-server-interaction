const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware to parse URL-encoded bodies 
app.use(express.urlencoded({ extended: true }));

// Server CSS files from each folder
app.use(express.static(path.join(__dirname, 'clientView')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'clientView'));


// GET route  
app.get('/', (request, response) => {
    response.render('formPage/form');
});

// POST route
app.post('/submit', (request, response) => {
    const { name, gender, age, phone, email, address } = request.body;
    response.render('resultPage/result', { name, gender, age, phone, email, address });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
