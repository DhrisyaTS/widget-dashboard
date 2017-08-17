// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

describe('POST /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .post('/')
	 .expect(200, done); 
  });
});