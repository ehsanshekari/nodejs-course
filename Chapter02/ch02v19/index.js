function g2Kg(grams){
  return grams / 1000;
}

function Fahren2Centigarde(degFahren) {
  return 5/9 * (degFahren - 32);
}

function Cent2Farenheit(degCent) {
  return (9/5 * degCent) + 32 ;
}

module.exports = {
  g2Kg,
  Fahren2Centigarde,
  Cent2Farenheit
}