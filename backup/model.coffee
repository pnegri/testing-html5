unless typeof exports is 'undefined'
  Backbone = require 'backbone'

###
getObjectClass = (obj)->
  if obj and obj and obj.toString
    arr = obj.toString().match /function\s*(\w+)/
    if arr and arr.length is 2
      arr[1]
###

class BaseModel extends Backbone.Model
  urlRoot: '/bases'
  defaults:
    name: "Patrick"
    sexy: true

#  unless typeof(module) is 'undefined'
#    server_methods = require './basemodel-server'
#    for extended_method of server_methods
      
#      this.prototype[ extended_method ] = server_methods[ extended_method ]
#      console.log extended_method

#console.log getObjectClass(BaseModel).toLowerCase()

unless typeof(module) is 'undefined'
  server_methods = require './basemodel-server'
  for server_method of server_methods
    BaseModel::[server_method] = server_methods[ server_method ]
  module.exports = BaseModel
