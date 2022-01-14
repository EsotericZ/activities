const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  console.log('Good Job');
  res.send('Succesful Send!');
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  console.log('Succesfull Post');
  res.send('Huzzah!');
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  console.log('Look at all these upvotes!')
  res.send('Upvote FTW');
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  console.log('Succesfull Post... Part 2!');
  res.send('Huzzah... Part 2!');
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
