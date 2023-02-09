// const chai = require('chai')
// const expect = chai.expect;
// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');
// const actualData = require('../actualData/objects.json')
// describe('GET', () => {
//   const baseUrl = 'https://api.restful-api.dev/objects'
//   const id3 = 3
//   const id5 = 5
//   const id10 = 10
//   describe('Get all objects', function () {
//     it('Should have JSON response', function (done) {
//       request(baseUrl)
//         .get('/')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//     it('Should have 200 status code', function (done) {
//       request(baseUrl)
//         .get('/')
//         .set('Accept', 'application/json')
//         .expect(200, done);
//     });
//     it('Should have 13 objects', function () {
//       request(baseUrl)
//         .get('/')
//         .set('Accept', 'application/json').then((response, err) => {
//           expect(response.body.length).equal(13)
//           if (err) {
//             throw err;
//           }
//         })
//     })
//     it('Should have expected response', async (done) => {
//       request(baseUrl)
//         .get('/')
//         .set('Accept', 'application/json').then((response, err) => {
//           assertEquals(actualData, response.body)
//            expect(response.body.length).eql(15)
//            assert.strictEqual(13, 15)
//            assert.deepEqual(response.body.length, 1)
//            console.log('le', response.body.length)
//           if (err) {
//             throw err;
//           }
          
//         })
//         done()
//     })

//   });
//   describe('Get objects by ID', function () {
//     // baseUrl = 'https://api.restful-api.dev/objects?id=3&id=5&id=10'
//     it('Should have JSON response', function (done) {
//       request(baseUrl)
//         .get('/')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//     it('Should have JSON response', function () {
//       request(baseUrl)
//         .get(`?id=${id3}&id=${id5}&id=${id10}`)
//         .set('Accept', 'application/json')
//         .then((response, err) => {
//           console.log(response.body)
//         //  assertEquals(id1, response.body.id)
//           expect(response.body.name).equal(15)
//           if (err) {
//             throw err;
//           }
//         })
//     });

//   });
// })