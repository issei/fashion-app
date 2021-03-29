'use strict';

var fs = require('fs');
var path = require('path');
require("honeycomb-beeline")({
  // Get this via https://ui.honeycomb.io/account after signing up for Honeycomb
  writeKey: "1267f6cb770876516e9a8eca25a2e48f",
  // The name of your app is a good choice to start with
  dataset: "my-node-distributed-app",
  serviceName: "my-node-service"
});

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
