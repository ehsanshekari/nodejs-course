const axios = require('axios');
const util = require('util');
const fs = require('fs');
const os = require('os');

const token = 'pk.eyJ1IjoiZWhzYW5zaGVrYXJpIiwiYSI6ImNramVnemdyMzA1dzkyc2xvcHYyeTE0cHcifQ.i_SEqVXQyQISj2wFRS5Z-w';
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?types=poi&access_token=${token}`;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const fileParser = (data) => {
  const lines = data.split(os.EOL);
  return lines.map(l => l.split(','));
};

const readyWriteData = (geolocations, extractedNames) => {
  let data = '';
  for (let i = 0; i < geolocations.length; i++) {
    data += `${geolocations[i][0]},${geolocations[i][1]} : ${extractedNames[i]}\n`;
  }
  return data;
}

let geolocations;
readFile('./latlong.txt', 'utf-8')
  .then(fileData => fileParser(fileData))
  .then(result => {
    geolocations = result;
    let promises = [];
    for (let i = 0; i < geolocations.length; i++) {
      promises.push(axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${geolocations[i][0]},${geolocations[i][1]}.json?types=poi&access_token=${token}`));
    }
    return Promise.all(promises);
  })
  .then(locations => {
    const extractedNames = locations.map(location => location.data.features[0].place_name);
    const data = readyWriteData(geolocations, extractedNames);
    return writeFile('report.txt', data);
  })
  .then(() => {
    console.log('Report is created!');
  })
  .catch(error => console.log('-->', error));



