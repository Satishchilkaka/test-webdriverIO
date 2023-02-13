const chai = require('chai')
const expect = chai.expect;
const request = require('supertest');
const assert = require('assert');
const actualData = require('../actualData/objects.json')
const id3id5id10 = require('../actualData/id3id5id10.json')
describe('GET', () => {
  const baseUrl = 'https://api.restful-api.dev/objects'
  const id3 = 3
  const id5 = 5
  const id10 = 10
  describe('Get all objects', function () {
  
    it('Should have JSON response', function (done) {
      request(baseUrl)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done)
        
    });
    it('Should have 200 status code', function (done) {
      request(baseUrl)
        .get('/')
        .set('Accept', 'application/json')
        .expect(function (response) {
          expect(response.status).to.equal(200)
        })
        .end(function (err) {
          if (err) {
            throw err;
          } 
          done();
        });
    });
    it('Should have 13 objects', function (done) {
      request(baseUrl)
        .get('/')
        .set('Accept', 'application/json')
        .expect(function (response) {
        expect(response.body.length).to.eql(13)
         // assert.strictEqual(response.body.length, 13)
        })
        .end(function (err) {
          if (err) {
            throw err;
          } 
          done();
        });
    })
    it('Should have expected response', function (done){
      request(baseUrl)
        .get('/')
        .set('Accept', 'application/json')
        
        .expect(function (response) {
          // Can be used anyone
          expect(actualData).to.eql(response.body)
          expect(actualData).deep.equal(response.body)
          assert.deepStrictEqual( actualData, response.body)
          })
          .end(function (err) {
            if (err) {
              throw err;
            } 
            done();
          });
        
    })

  });
  describe('Get objects by ID', function () {
    // baseUrl = 'https://api.restful-api.dev/objects?id=3&id=5&id=10'
    it('Should have JSON response', function (done) {
      request(baseUrl)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('Should have 3 objects', function (done) {
      request(baseUrl)
        .get(`?id=${id3}&id=${id5}&id=${id10}`)
        .set('Accept', 'application/json')
        .expect(function (response) {
          expect(response.body).to.eql(id3id5id10)
           // assert.strictEqual(response.body.length, 13)
          })
          .end(function (err) {
            if (err) {
              throw err;
            } 
            done();
          });
    });

  });
})