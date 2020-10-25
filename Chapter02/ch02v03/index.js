const convertor = require('./convertor');

const gValue = 2000;
const kgValue = convertor.g2Kg(gValue);

console.log(kgValue);

const centValue = 30;
const fValue = convertor.Cent2Farenheit(centValue);
console.log(fValue);