const fs = require('fs');
const os = require('os');
const util = require('util');
const axios = require('axios');

const token = 'pk.eyJ1IjoiZWhzYW5zaGVrYXJpIiwiYSI6ImNramVnemdyMzA1dzkyc2xvcHYyeTE0cHcifQ.i_SEqVXQyQISj2wFRS5Z-w';
let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places'

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const fileParser = (data) => {
  const lines = data.split(os.EOL);
  return lines.map(line => line.split(','));
}

const readyWriteData = (geoLocations, names) => {
  let data = '';
  for (let i = 0; i < geoLocations.length; i++) {
    data += `${geoLocations[i][0]},${geoLocations[i][1]} : ${names[i]}\n`;
  }
  return data;
}

let geoLocations;
readFile('./latlong.txt', 'utf-8')
  .then(fileData => fileParser(fileData))
  .then(result => {
    geoLocations = result;
    let promises = [];
    for (let i = 0; i < geoLocations.length; i++) {
      promises.push(axios.get(url + `/${geoLocations[i][0]},${geoLocations[i][1]}.json?types=poi&access_token=${token}`));
    }
    return Promise.all(promises);
  })
  .then(locations => {
    const extractedNames = locations.map(location => { console.log(location.data); return location.data.features[0].place_name; });
    const data = readyWriteData(geoLocations, extractedNames);
    return writeFile('result.txt', data);
  })
  .then(() => console.log('Finished successfully'))
  .catch(e => console.log('error:', e.response.data));