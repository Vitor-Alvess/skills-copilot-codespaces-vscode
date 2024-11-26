// Create web server
const express = require('express');
const app = express();
// Create express app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create post request
app.post('/comment', (req, res) => {
    console.log(req.body);
    res.send('Comment is saved.');
});
// Run server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// Create a POST request to send data to the server