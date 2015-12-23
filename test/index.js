var should = require('chai').should()
  , sut = require('../lib');

describe('Redis', function() {
    
  it('should create connection', function() {
    sut.connection.should.exist;
  });
    
  it('should connect to localhost', function() {
    sut.connection.options.host.should.equal('127.0.0.1');
  });
    
  it('should connect to default port', function() {
    sut.connection.options.port.should.equal(6379);
  });
      
  it('should generate keys', function() {
    sut.key('a', 'b', 'c').should.equal('a:b:c');
  });

  it('should close the connection', function() {
    sut.close();
  });

});