const tape = require('tape')
const isRequired = require('./isRequired')

tape('isRequired', test => {
  let fail = false

  try {
    isRequired()
    fail = true
  } catch (error) {
    test.equal(error.message, 'Missing required field', 'empty argument should return default message')
  }

  try {
    isRequired('foo')
    fail = true
  } catch (error) {
    test.equal(error.message, 'Missing required field', 'invalid argument should return default message')
  }

  try {
    isRequired({
      category: 'foo'
    })
    fail = true
  } catch (error) {
    test.equal(error.message, '[foo] Missing required field', 'should return category in error message')
  }

  try {
    isRequired({
      prop: 'foo'
    })
    fail = true
  } catch (error) {
    test.equal(error.message, 'The prop \'foo\' is required', 'should return prop in error message')
  }

  try {
    isRequired({
      category: 'foo',
      prop: 'bar'
    })
    fail = true
  } catch (error) {
    test.equal(error.message, '[foo] The prop \'bar\' is required', 'should return full error message')
  }

  test.equal(fail, false, 'isRequired should always throw')

  test.end()
})
