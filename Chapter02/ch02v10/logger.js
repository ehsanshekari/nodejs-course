const chalk = require('chalk');

module.exports.error = (message) => {
  console.log(chalk.red(message) + chalk.blue('This is another sentence')); //red
}

module.exports.info = (message) => {
  console.log(chalk.green(message)); //green
}

module.exports.warning = (message) => {
  console.log(chalk.yellow(message)); //yellow
}
