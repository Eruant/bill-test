const tape = require('tape')
const dataStoreActions = require('./dataStoreActions')

tape('dataStoreActions', test => {
  test.equal(typeof dataStoreActions, 'object', 'dataStoreActions should be an object')

  test.equal(dataStoreActions.hasOwnProperty('getBillRequest'), true, 'should have getBillRequest property')
  test.equal(dataStoreActions.hasOwnProperty('getBillSuccess'), true, 'should have getBillSuccess property')
  test.equal(dataStoreActions.hasOwnProperty('getBillFailure'), true, 'should have getBillFailure property')

  test.end()
})
