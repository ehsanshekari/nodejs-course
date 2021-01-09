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

async function createReport() {
  try {
    let geolocations;
    const fileData = await readFile('./latlong.txt', 'utf-8');
    geolocations = fileParser(fileData);
    let promises = [];
    for (let i = 0; i < geolocations.length; i++) {
      promises.push(axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${geolocations[i][0]},${geolocations[i][1]}.json?types=poi&access_token=${token}`));
    }
    const locations = await Promise.all(promises);
    const extractedNames = locations.map(location => location.data.features[0].place_name);
    const data = readyWriteData(geolocations, extractedNames);
    await writeFile('report.txt', data);
    console.log('Report is created');
  } catch (e) {
    console.log(e);
  }
}

createReport();

// async function sendRequest() {
//   try {
//     const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?types=poi&access_token=${token}`)
//     console.log(result.data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// sendRequest()