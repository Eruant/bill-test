const tape = require('tape')
const i18n = require('./index')

tape('i18n', test => {
  test.equal(typeof i18n(), 'object', 'i18n should return the default "en-uk" object')
  test.equal(typeof i18n('en-uk'), 'object', 'i18n should return the default "en-uk" object')

  test.end()
})
