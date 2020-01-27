import axios from 'axios';

const endpoint = 'https://absolute-nexus-265212.appspot.com/';
export const login = (username, password)  => {
    axios.get(endpoint + 'login?username=' + username + '&password=' + password)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
    