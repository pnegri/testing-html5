var Backbone, BaseModel;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
if (typeof exports !== 'undefined') {
  Backbone = require('backbone');
}
/*
getObjectClass = (obj)->
  if obj and obj and obj.toString
    arr = obj.toString().match /function\s*(\w+)/
    if arr and arr.length is 2
      arr[1]
*/
Backbone.Model.includes = function(filename) {
  var new_method, new_methods;
  new_methods = require(filename);
  for (new_method in new_methods) {
    this.prototype[new_method] = new_methods[new_method];
  }
  return true;
};
BaseModel = (function() {
  __extends(BaseModel, Backbone.Model);
  function BaseModel() {
    BaseModel.__super__.constructor.apply(this, arguments);
  }
  BaseModel.prototype.urlRoot = '/bases';
  BaseModel.prototype.defaults = {
    name: "Patrick",
    sexy: true
  };
  return BaseModel;
})();
if (typeof module !== 'undefined') {
  BaseModel.includes('./basemodel-so');
  module.exports = BaseModel;
}