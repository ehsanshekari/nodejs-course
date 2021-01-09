const http = require('http');


http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World!</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('About Us!');
    res.end();
  }
}).listen(3000, () => { console.log('Server is running on port 3000'); });