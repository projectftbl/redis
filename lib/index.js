var Promise = require('bluebird')
  , Redis = require('ioredis')
  , chalk = require('chalk')
  , log = require('@recipher/log')
  , configuration = require('./configuration');

var Connection = function() {
  if (this instanceof Connection === false) return new Connection;

  this.config = configuration();
  
  this.connection = new Redis(this.config);

  log.info('Connected to Redis at ' + chalk.green(this.config.host) + ' to db #' + chalk.green(this.config.db) + ' on port ' + chalk.green(this.config.port));
};

Connection.prototype.key = function() {
  var args = Array.prototype.slice.call(arguments);
  return args.join(':');
};

Connection.prototype.close = function() {
  return Promise.promisify(this.connection.quit.bind(this.connection))();
};

module.exports = new Connection;
