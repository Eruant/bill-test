const tape = require('tape')
const dataStore = require('./dataStore')
const dataStoreActions = require('./dataStoreActions')

tape('dataStore - get bill request', test => {
  test.equal(typeof dataStore, 'object', 'dataStore should be an object')

  dataStore.dispatch({type: 'RESET'})

  let {bill} = dataStore.getState()

  test.equal(bill.data, null)
  test.equal(bill.error, null)
  test.equal(bill.isLoading, false)

  dataStore.dispatch({
    id: '1',
    type: dataStoreActions.getBillRequest
  })

  bill = dataStore.getState().bill

  test.equal(bill.data, null)
  test.equal(bill.error, null)
  test.equal(bill.isLoading, true)

  test.end()
})

tape('dataStore - get bill failure', test => {
  dataStore.dispatch({type: 'RESET'})
  dataStore.dispatch({
    type: dataStoreActions.getBillFailure,
    error: new Error('foo')
  })

  let {bill} = dataStore.getState()

  test.equal(bill.error.message, 'foo')
  test.equal(bill.isLoading, false)

  test.end()
})

tape('dataStore - get bill success', test => {
  dataStore.dispatch({type: 'RESET'})
  dataStore.dispatch({
    type: dataStoreActions.getBillSuccess,
    data: {
      foo: 'bar'
    }
  })

  let {bill} = dataStore.getState()

  test.equal(bill.data.foo, 'bar')
  test.equal(bill.error, null)
  test.equal(bill.isLoading, false)

  test.end()
})

tape('dataStore - default action', test => {
  dataStore.dispatch({type: 'RESET'})
  dataStore.dispatch({type: 'unknown'})

  let {bill} = dataStore.getState()

  test.equal(bill.data, null)
  test.equal(bill.error, null)
  test.equal(bill.isLoading, false)

  test.end()
})
