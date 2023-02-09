var axios = require('axios');
const chai = require('chai')
var expect = chai.expect;
const actualData = require('../actualData/objects.json')

describe('Array', function () {
    describe('Status code', function () {
        const config = {
            method: 'get',
            url: 'https://api.restful-api.dev/objects',
            headers: {}
        };
        it('Should have status code 200', function () {
            axios(config)
                .then(function (response) {
                    expect(response.status).equal(200)
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
                    expect(response.data).to.eql(actualData, 'fail')

                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    });
});

// expect([1,2,3]).to.have.members([3,2,1]);