var assert = require('chai').assert;
var jsdom = require('mocha-jsdom');
var sinon = require('sinon');
var search = require('../src/search');


var addEventListenerStub;

before(function(){
  addEventListenerStub = sinon.stub(search.addEventListener,'addEventListener');
});

describe("Search Page", function(){
  describe('Listener', function(){
    it('should add listener for enter key press', function(){
      assert.equal(search.init(),'init');
    });

    it('should remove listener when page is destroyed', function(){

    });
  });

  describe('keyword validation', function(){
    it('should check keyword is not empty string', function(){

    });
    it('should check keyword at least two letters long', function(){

    });
  });

  describe('http request', function(){
    it('should make http request when keyword is valid', function(){

    });
    it('should handle response', function(){

    });
  });

  describe('Parsing results', function(){
    it('should check results are not empty', function(){

    });
    it('should parse results into title models', function(){

    });
  });
});
