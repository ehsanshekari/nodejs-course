const fs = require('fs');
const os = require('os');


fs.readFile('./countries.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Can not read the file!');
    return
  }

  console.log(data);
  const countries = data.split(os.EOL);
  console.log(countries);
})