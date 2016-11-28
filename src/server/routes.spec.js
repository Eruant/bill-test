const tape = require('tape')
const routes = require('./routes')

tape('routes', test => {
  let request = null
  let reply = null
  let result = null

  test.equal(routes instanceof Array, true, 'routes should be an array')

  routes.forEach(route => {
    test.equal(route.hasOwnProperty('method'), true, 'each route should have a method')
    test.equal(route.method instanceof Array || typeof route.method === 'string', true, 'methods should be either an array or a string')
    test.equal(route.hasOwnProperty('path'), true, 'routes should have a path set')
    test.equal(typeof route.path, 'string', 'paths should always be strings')
    test.equal(route.hasOwnProperty('handler'), true, 'routes should have a handler set')
  })

  request = {
    params: {
      filename: 'arrow.svg'
    }
  }

  reply = {
    file: filepath => filepath // mock to reply with filename string
  }

  const [resources, proxy, home, bills, bill] = routes

  result = resources.handler(request, reply)
  test.equal(typeof result, 'string', 'resources handler should return a string')
  test.equal(/static\/arrow\.svg$/.test(result), true, 'resources handler should return correct filename')

  // eslint-disable-next-line
  test.equal(/^https?:\/\/[a-z\-\.\/]+/.test(proxy.handler.proxy.uri), true, 'proxy should return uri')

  reply = function (body = null) {
    reply.state = {
      body,
      redirect: null,
      code: null
    }
    return reply
  }
  reply.redirect = function (redirect) {
    reply.state.redirect = redirect
    return reply
  }
  reply.code = function (code) {
    reply.state.code = code
    return reply
  }
  reply.debug = function () {
    return reply.state
  }

  home.handler({path: '/'}, reply())
  test.equal(reply.debug().redirect, '/bills/1', '/ should redirect to /bills/1')

  bills.handler({path: '/bills'}, reply())
  test.equal(reply.debug().redirect, '/bills/1', '/bills should redirect to /bills/1')

  bill.handler({path: '/bills/1', params: {id: '1'}}, reply)
  test.equal(/<!doctype html>/.test(reply.debug().body), true, 'should return html')

  test.end()
})
