const express = require('express');

//  POST         /posts
//  GET          /posts
//  PUT          /posts/:id
//  GET          /posts/:id
//  DELETE       /posts/:id

// post ---> id, title, content

const app = express();

let posts = [];

app.post('/posts', (req, res) => {
  res.status(201).send('Create a post');
});

app.get('/posts', (req, res) => {
  res.status(200).send('Return all posts');
});

app.get('/posts/:id', (req, res) => {
  res.status(200).send('Return a specific post');
});

app.put('/posts/:id', (req, res) => {
  res.status(200).send('Update a specific post');
});

app.delete('/posts/:id', (req, res) => {
  res.status(200).send('Delet a specific post');
});

app.listen(3000, () => { console.log('server is runnng on port 3000!'); })