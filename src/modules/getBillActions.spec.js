const tape = require('tape')
const {getBillRequest} = require('./getBillActions')
const dataStoreActions = require('./dataStoreActions')

tape('getBillRequest()', test => {
  const message = 'calling getBillRequest without an id should throw an error'
  try {
    getBillRequest()
    test.fail(message)
  } catch (error) {
    test.pass(message)
  }

  test.end()
})

tape('getBillRequest(id)', test => {
  const result = getBillRequest({id: 'foo'})

  test.equal(typeof result, 'object', 'getBillRequest should return an object')
  test.equal(result.id, 'foo', 'getBillRequest should return the correct id')
  test.equal(result.type, dataStoreActions.getBillRequest, 'should return the correct action')

  test.end()
})
