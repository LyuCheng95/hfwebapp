import axios from 'axios';

const endpoint = 'https://absolute-nexus-265212.appspot.com/';
export const login = (username, password) => {
  return axios.get(endpoint + 'login?username=' + username + '&password=' + password)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export const register = (username, password) => {
  return axios.get(endpoint + 'register?username=' + username + '&password=' + password)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}