var should = require('chai').should()
  , sut = require('../lib/configuration');

describe('configuration', function() {
    
  describe('from host, port, password', function() {
    before(function() {
      this.configuration = sut({ host: 'localhost', port: 6379, password: 'password' });
    });
    
    it('should set correct host', function() {
      this.configuration.host.should.equal('localhost');
    });
      
    it('should set correct port', function() {
      this.configuration.port.should.equal(6379);
    });
      
    it('should set correct password', function() {
      this.configuration.password.should.equal('password');
    });
  });
    
  describe('from url', function() {
    before(function() {
      this.configuration = sut({ url: 'redis://user:pwd@127.0.0.1:3000/4' });
    });
    
    it('should set correct host', function() {
      this.configuration.host.should.equal('127.0.0.1');
    });
      
    it('should set correct port', function() {
      this.configuration.port.should.equal(3000);
    });
      
    it('should set correct db', function() {
      this.configuration.db.should.equal(4);
    });
     
    it('should set correct password', function() {
      this.configuration.password.should.equal('pwd');
    });
  });
    
  describe('from defaults', function() {
    before(function() {
      this.configuration = sut({ host: null, port: null, password: null });
    });
    
    it('should set correct host', function() {
      this.configuration.host.should.equal('localhost');
    });
      
    it('should set correct port', function() {
      this.configuration.port.should.equal(6379);
    });
     
    it('should set correct password', function() {
      should.not.exist(this.configuration.password);
    });
  });

});