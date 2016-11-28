const path = require('path')
const React = require('react')
const {
  renderToString,
  renderToStaticMarkup
} = require('react-dom/server')

const i18n = require('../i18n')

const dataStore = require('../modules/dataStore')
const Layout = require('../modules/Layout')
const Bill = require('../modules/Bill')

module.exports = [
  {
    method: 'GET',
    path: '/resources/{filename}',
    handler (request, reply) {
      const filename = request.params.filename
      const filepath = path.join(__dirname, '../static', filename)
      console.log(filepath)

      return reply.file(filepath)
    }
  },
  {
    method: 'GET',
    path: '/api/bills/{id}',
    handler: {
      proxy: {
        uri: 'https://still-scrubland-9880.herokuapp.com/bill.json'
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler (request, reply) {
      return reply.redirect('/bills/1')
    }
  }, {
    method: 'GET',
    path: '/bills',
    handler (request, reply) {
      return reply.redirect('/bills/1')
    }
  },
  {
    method: 'GET',
    path: '/bills/{id}',
    handler (request, reply) {
      const language = i18n('en-uk')

      const props = {
        dataStore: dataStore.getState(),
        language,
        query: {
          id: request.params.id
        }
      }

      const state = `window.state = ${JSON.stringify(props)}`
      const appMarkup = renderToString(<Bill {...props} />)
      const html = renderToStaticMarkup(<Layout language={language} state={state}>{appMarkup}</Layout>)
      return reply('<!doctype html>' + html)
    }
  }
]
