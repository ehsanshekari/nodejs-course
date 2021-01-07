const request = require('request');

const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
  qs: { date: '2020-05-25', name: 'Iran' },
  headers: {
    'x-rapidapi-key': '2fcc5bfceemshf8ef0d53b78183ap1e430djsn347fc56b446d',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
  }
}

request(options, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log('An error happened');
    return;
  }
  console.log(JSON.stringify(JSON.parse(body), null, 2));
})