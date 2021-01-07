const fs = require('fs');
const os = require('os');
const request = require('request');

fs.readFile('./countries.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Can not read the file!');
    return
  }
  const countries = data.split(os.EOL);

  // const today = new Date();
  // const strDate = today.toISOString().split('T')[0];

  let stats = [];
  
  sendRequest(countries, stats, 0, callback)
})

function callback(stats){
  console.log(stats);
}

function sendRequest(countries, stats, i, cb) {
  if(countries.length === i){
    cb(stats);
    return;
  }

  const options = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
    qs: { date: '2020-05-25', name: countries[i] },
    headers: {
      'x-rapidapi-key': '2fcc5bfceemshf8ef0d53b78183ap1e430djsn347fc56b446d',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    }
  }

  request(options, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('An error happened', error, response.body);
      return;
    }
    body = JSON.parse(body);
    console.log(body[0].provinces[0].deaths);
    stats[i] = body[0].provinces[0].deaths;
    setTimeout(sendRequest, 2000, countries, stats, ++i, cb);
  })
}



