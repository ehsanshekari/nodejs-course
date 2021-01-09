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
  const { id } = req.params;
  const found = posts.find(p => p.id === id)
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: 'not found' })
  }
});

app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const found = posts.find(p => p.id === id)
  if (found) {
    found.title = title;
    found.content = content;
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: 'not found' })
  }
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex(p => p.id === id)
  if (index === -1) {
    res.status(404).json({ message: 'not found' })
  } else {
    posts.splice(index, 1);
    res.status(200).send({ message: 'successfully deleted' });
  }
});

app.listen(3000, () => { console.log('server is runnng on port 3000!'); })