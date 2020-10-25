module.exports.error = (message) => {
  console.log('\x1b[31m%s\x1b[0m', message); //red
}

module.exports.info = (message) => {
  console.log('\x1b[32m%s\x1b[0m', message); //green
}

module.exports.warning = (message) => {
  console.log('\x1b[33m%s\x1b[0m', message); //yellow
}