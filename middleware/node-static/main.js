var Http = require('http');
var FS = require('fs');
var Url = require('url');

var NodeStatic = require('node-static');

var NodeStaticController = function() {}

NodeStaticController.print_req = function( params ) {
  console.log( params.one );
  console.log( params.two );
  params.app.respondWithNotFound( params.response )
  return true;
}

NodeStaticController.get_file = function( params ) {
  /*
  params.response.writeHead( 200, {"Content-Type":"text/plain"} );
  params.response.write('Hello world');
  params.response.end();
  */
  //params.request.url = params.request.url.replace( '/cdn', '' );
  
  params.request.url = params.static_file;

//  console.log( 'static' + params.static_file);
//  console.log( 'URL' + params.request.url );

//  console.log( 'Trying to serve static: ' + decodeURI(Url.parse(params.request.url).pathname) );
  this.test_resource.serve( params.request, params.response,
    function (err,result) {
      if (err) {
        params.app.respondWithNotFound( params.response )
        //params.response.respondWith( params.app.Template.doRender( 'other.haml', this, {}, false) );
        console.log( 'Error serving ' + params.request.url + ' - ' + err.message );
      }
    }
  );
  return true;
}

NodeStaticController.bootstrap = function( application ) {
  if (!application || !application.config || !application.config.nodeStatic || !application.config.nodeStatic.assets) return;

  this.routes = {};

  for ( resource_name in application.config.nodeStatic.assets ) {
    var resource_config = application.config.nodeStatic.assets[ resource_name ];
    this.routes[ '/' + resource_name + '/{static_file}' ] = 'get_file';
    this.test_resource = new NodeStatic.Server( resource_config.directory, resource_config.config  );
  }
  this.routes[ '/bla/{one}/{two}' ] = 'print_req';
}

NodeStaticController.getRoutes = function() {
  return this.routes;
}

NodeStaticController.prototype = {
  routes: {},
  resources: [],
  test_resource: null
}

module.exports = NodeStaticController;
