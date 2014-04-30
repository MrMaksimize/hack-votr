var request = require('supertest');
var app = require('../app.js');

describe('POST /votes/sms', function() {
  it('should return 200 OK', function(done) {
    var bodyString = "Body=Gh&MessageSid=SMb251b49a699fa9de11360ab633e48632&FromZip=60712&From=%2B17736777755&FromCountry=US&SmsStatus=received&FromCity=CHICAGO&ApiVersion=2010-04-01&To=%2B19164263342&NumMedia=0&ToZip=&ToCountry=US&ToState=CA&AccountSid=ACe0c25418c2742c5b49f8f8041899b360&SmsSid=SMb251b49a699fa9de11360ab633e48632&ToCity=&FromState=IL&SmsMessageSid=SMb251b49a699fa9de11360ab633e48632";

    request(app)
      .post('/votes/sms', {body: bodyString})
      .expect(200, done);
  });
});

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /contact', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
