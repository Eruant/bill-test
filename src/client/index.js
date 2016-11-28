const React = require('react')
const {render} = require('react-dom')

const dataStore = require('../modules/dataStore')
const Bill = require('../modules/Bill')

const doc = window.document

const doRender = (state) => {
  render(<Bill {...state} />, doc.getElementById('app'))
}

const init = () => {
  doc.addEventListener('DOMContentLoaded', init)

  let state = window.state

  const stateScript = window.document.querySelector('#globalState')
  stateScript.parentNode.removeChild(stateScript)

  dataStore.subscribe(() => {
    state.dataStore = dataStore.getState()

    doRender(state)
  })

  doRender(state)
}

doc.addEventListener('DOMContentLoaded', init)
