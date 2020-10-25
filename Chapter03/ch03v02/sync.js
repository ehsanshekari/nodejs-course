// Core (native) node
const fs = require('fs');

console.log(':::1:::');

const content1 = fs.readFileSync('file1.txt');

console.log(':::2:::', content1);

const content2 = fs.readFileSync('file2.txt')

console.log(':::3:::', content2);

