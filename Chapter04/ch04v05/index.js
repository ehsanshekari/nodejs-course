const express = require('express');
const { v4: uuidv4 } = require('uuid');


//  POST         /posts
//  GET          /posts
//  PUT          /posts/:id
//  GET          /posts/:id
//  DELETE       /posts/:id

// post ---> id, title, content

const app = express();
app.use(express.json());

let posts = [];

app.post('/posts', (req, res) => {
  const id = uuidv4();
  const { title, content } = req.body;
  const newPost = { id, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/posts', (req, res) => {
  res.status(200).json({ items: posts });
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