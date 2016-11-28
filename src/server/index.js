const {Server} = require('hapi')

const plugins = require('./plugins')
const routes = require('./routes')

const server = new Server()

server.connection({
  port: process.env.PORT || 8080
})

server.register(plugins)

server.route(routes)

server.start().then(error => {
  if (error) {
    throw error
  }

  console.log(`Server started at: ${server.info.uri}`)
})
