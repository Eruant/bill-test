/* globals fetch */

const {createStore} = require('redux')
const dataStoreActions = require('./dataStoreActions')
const isNode = require('detect-node')

let store

const defaultState = {
  bill: {
    data: null,
    error: null,
    isLoading: false
  }
}

const storeFactory = (state = defaultState, action) => {
  let data

  switch (action.type) {
    // Bill API Request
    case dataStoreActions.getBillRequest:
      if (!isNode) {
        fetch(`/api/bills/${action.id}`)
          .then(response => response.json())
          .then(data => {
            return {
              data,
              type: dataStoreActions.getBillSuccess
            }
          })
          .catch(error => {
            return {
              error,
              type: dataStoreActions.getBillFailure
            }
          })
          .then(action => {
            store.dispatch(action)
          })
      }

      data = Object.assign({}, state.data, {
        data: null,
        error: null,
        isLoading: true
      })

      return Object.assign({}, state, {bill: data})

    // Bill API Error
    case dataStoreActions.getBillFailure:

      data = Object.assign({}, state.data, {
        error: action.error,
        isLoading: false
      })

      return Object.assign({}, state, { bill: data })

    // Bill API success
    case dataStoreActions.getBillSuccess:

      data = Object.assign({}, state.data, {
        data: action.data,
        error: null,
        isLoading: false
      })

      return Object.assign({}, state, { bill: data })

    case 'RESET':
      return Object.assign({}, defaultState)

    default:
      return Object.assign({}, state)
  }
}

store = createStore(storeFactory)

module.exports = store
