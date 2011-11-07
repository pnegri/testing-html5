TestController =
  index: ( params ) ->
    params.response.respondWith 'Hello World'

  printname: ( params ) ->
    params.response.respondWith 'My name is ' + params.myname + ' @ ' + params.request.query.age

  getRoutes: ->
    {
      '/test': 'index'
      '/mynameis/{myname}': 'printname'
    }

module.exports = TestController
