const tape = require('tape')
const plugins = require('./plugins')

tape('plugins', test => {
  test.equal(plugins instanceof Array, true, 'plugins should be an array')
  test.equal(plugins.length, 3, 'there should be two plugins installed')

  test.end()
})
