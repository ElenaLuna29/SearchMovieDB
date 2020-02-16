var assert = require('chai').assert;
var sinon = require('sinon');
var request = require('../../src/services/request');

var xhr;
var _global;



describe('Request', function(){
  // before(function(){
  //   console.log("top before");
  // });

  // after(function(){
  //   // console.log("top after");
  // });

  // beforeEach(function () {
  //     console.log("top beforeEach");
  // });
  // afterEach(function () {
  //     console.log("top afterEach");
  // });

  it('should build url', function(){

    _global.XMLHttpRequest = global.XMLHttpRequest;
    global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

    global.XMLHttpRequest = _global.XMLHttpRequest;

  });
  it('should create an XMLHttp object', function(){

  });
  it('should send a get request', function(){

  });
  it('should throw error if error is received', function(){

  });

});
