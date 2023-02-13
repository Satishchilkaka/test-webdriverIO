var axios = require('axios');
const chai = require('chai')
var expect = chai.expect;
const actualData = require('../actualData/objects.json')

describe('REST', function () {
    describe('All objects', function () {
        const config = {
            method: 'get',
            url: 'https://api.restful-api.dev/objects',
            headers: {}
        };
        it('Should have JSON response', function () {
            axios(config)
                .then(function (response) {
                    expect('Content-Type', /json/)
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        it('Should have status code 200', function () {
            axios(config)
                .then(function (response) {
                    expect(response.status).equals(200)
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

        it('Should have 13 objects', function () {
            axios(config)
                .then(function (response) {

                    expect(response.data.length).equal(13)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        it('Should have expected response', function () {
            axios(config)
                .then(function (response) {
                    expect(response.data).to.eql(actualData)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    });
    describe('Single object', function () {
        const config = {
            method: 'get',
            url: 'https://api.restful-api.dev/objects/7',
            headers: {},
            params: {
                id: '3',
                 id: '4'
              }
        };
        it('Should have JSON response', function () {
            axios(config)
            .then(function (response) {
                expect('Content-Type', /json/)
            })
            .catch(function (error) {
                console.log(error);
            });
        });
        it('Should get IDs', function () {
            axios(config)
            .then(function (response) {
                expect('Content-Type', /json/)
                expect(response.data.id).to.eql(7)
            })
            .catch(function (error) {
                console.log(error);
            });
        });


    })
});

// expect([1,2,3]).to.have.members([3,2,1]);