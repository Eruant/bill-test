const good = require('good')
const inert = require('inert')
const h2o2 = require('h2o2')

module.exports = [
  {
    register: good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            log: '*',
            response: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  },
  inert,
  h2o2
]
