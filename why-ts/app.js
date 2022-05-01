// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email 
 * @property {string} address
 * 
 */

/**
 * @returns {Promise<User>} // user를 fetchUser로 호출하고 나면 Promise에 user 내용이 담겨져 있을 거다 
 */

function startApp() {

  function fetchUser(){
    return axios.get(url);
  }

  fetchUser().then(function (response){
    response.address.city
  })
-
  // axios
  //   .get(url)
    fetchUser() //  이게 위에 axios .get(url)과 같은 기능
    .then(function (response) {
      //console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기'
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;


    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
