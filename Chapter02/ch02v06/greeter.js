const messages = {
  en: 'Hello',
  fa: 'سلام',
};

class Greeter {
  constructor(lang) {
    this.lang = lang || 'en';
  }

  greet() {
    console.log(messages[this.lang]);
  }
}

module.exports = Greeter;
