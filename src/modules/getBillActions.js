const dataStoreActions = require('./dataStoreActions')
const isRequired = require('./isRequired')

const getBillRequest = ({id = isRequired({category: 'getBillRequest', props: 'id'})} = {}) => {
  return {
    id,
    type: dataStoreActions.getBillRequest
  }
}

module.exports = {
  getBillRequest
}
