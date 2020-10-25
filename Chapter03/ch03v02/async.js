const fs = require('fs');

console.log(':::1:::');

fs.readFile('file1.txt', (error, data) => {
  console.log(':::2:::', data);
})

console.log(':::3:::');

fs.readFile('file2.txt', (error, data) => {
  console.log(':::4:::', data);
})

console.log(':::5:::');
// ........

