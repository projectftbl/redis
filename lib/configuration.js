var defaults = require('lodash.defaults')
  , configuration = require('@ftbl/configuration');

module.exports = function(config) { // for testing purposes
  config = defaults(config || {}, {
    url: configuration('redis:url')
  , port: configuration('redis:port')
  , host: configuration('redis:host')
  , password: configuration('redis:password')
  });

  if (config.url) {
    var url = require('url').parse(config.url);

    var config = {
      port: parseInt(url.port, 10)
    , host: url.hostname
    };

    if (url.auth) config.password = url.auth.split(':')[1];

    return config;

  } else {
    return {
      port: config.port || 6379
    , host: config.host || 'localhost'
    , password: config.password
    };
  }
};