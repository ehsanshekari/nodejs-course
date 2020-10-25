const chalk = require('chalk');

module.exports.error = (message) => {
  console.log(chalk.red(message)); //red
}

module.exports.info = (message) => {
  console.log(chalk.green(message)); //green
}

module.exports.warning = (message) => {
  console.log(chalk.yellow(message)); //yellow
}
