const React = require('react')
const isRequired = require('./isRequired')

module.exports = ({
  value = isRequired({category: 'Currency', prop: 'value'})
} = {}) => {
  const parsedValue = parseFloat(Math.round(value * 100) / 100).toFixed(2)

  return <span className='currency'>&pound;{parsedValue}</span>
}
