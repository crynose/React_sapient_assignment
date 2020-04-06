const axios = require('axios');


export const getData = (reqObj) => {
  const { url } = reqObj;
  return axios({
    method: 'get',
    url,
  }).then(function (response) {
    return response && response.data;
  });
}