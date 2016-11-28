const EN_UK = require('./en-uk')

module.exports = (language = 'en-uk') => {
  switch (language) {
    case 'en-uk':
    default:
      return EN_UK
  }
}
