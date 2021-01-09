const axios = require('axios');
const util = require('util');
const fs = require('fs');
const os = require('os');

const token = 'pk.eyJ1IjoiZWhzYW5zaGVrYXJpIiwiYSI6ImNramVnemdyMzA1dzkyc2xvcHYyeTE0cHcifQ.i_SEqVXQyQISj2wFRS5Z-w';
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?types=poi&access_token=${token}`;
const readFile = util.promisify(fs.readFile);

const fileParser = (data) => {
  const lines = data.split(os.EOL);
  return lines.map(l => l.split(','));
};

readFile('./latlong.txt', 'utf-8')
  .then(result => {
    const locations = fileParser(result);
    console.log(locations);
    throw 'error';
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log('-->',error));



