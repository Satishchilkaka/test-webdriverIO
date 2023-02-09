var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.restful-api.dev/objects',
  headers: { }
};

axios(config)
.then(function (response) {
    expect(response).to.equal(200)
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
