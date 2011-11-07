arcabouco = require 'arcabouco-js'
debugging = true

config = {
  baseDirectory: __dirname
  nodeStatic: require './config.node-static'
}

app = new arcabouco config

app.loadController __dirname + '/test-controller'

# Loading a Middleware
app.loadController __dirname + '/middleware/node-static/main'

app.buildRouting()
app.createServer 8888

