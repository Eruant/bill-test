const React = require('react')
const moment = require('moment')
const isRequired = require('./isRequired')

module.exports = ({
  date = isRequired({category: 'FormatedDate', prop: 'date'}),
  format = 'Do MMM Y'
} = {}) => <span className={'formated-date'}>{moment(date).format(format)}</span>
