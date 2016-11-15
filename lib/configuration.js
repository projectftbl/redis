var defaults = require('lodash.defaults')
  , configuration = require('@recipher/configuration');

module.exports = function(config) { // for testing purposes
  config = defaults(config || {}, {
    url: configuration('redis:url')
  , port: configuration('redis:port')
  , host: configuration('redis:host')
  , password: configuration('redis:password')
  , db: configuration('redis:db')
  });

  if (config.url) {
    var url = require('url').parse(config.url);

    var config = {
      port: parseInt(url.port, 10)
    , host: url.hostname
    };

    if (url.auth) config.password = url.auth.split(':')[1];
    if (url.path) config.db = parseInt(url.path.replace('/', ''), 10);

    return config;

  } else {
    return {
      port: config.port || 6379
    , host: config.host || 'localhost'
    , password: config.password
    , db: config.db || 0
    };
  }
};