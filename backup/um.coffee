Backbone =  require 'backbone'

Backbone.sync = (method, model, options) ->
  console.log 'SAVE: ' + method + JSON.stringify( model )

BaseModel = require './model'

me = new BaseModel id: "1083-me"

#console.log me.test
#console.log me.url()
#console.log 'end'

#me.test()
me.set( name: "Kelzinha" )
