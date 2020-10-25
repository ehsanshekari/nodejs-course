// Core Modules
const path = require('path');
const os = require('os');
//fs, util, http & ...

const myFilePath = '/test/index.html';
const path1 = '/path1/sub';
const path2 = 'path2';

// path
console.log('dir:', path.dirname(myFilePath));
console.log('basename:', path.basename(myFilePath));
console.log('extension:', path.extname(myFilePath));
console.log('join two or more path:', path.join(path1, path2));
console.log('-----------------------------------------------');

// os
console.log(
  'Used Memory Percentage:',
  100 * (1 - os.freemem() / os.totalmem())
);
console.log('CPU Cores:', os.cpus().length);
console.log('-----------------------------------------------');
