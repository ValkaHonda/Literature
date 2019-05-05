export const getUserInfo = (name) => {
  let username = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/Puffle5`;
  return fetch(URL)
          .then((res) => res.json());
};
export const getAuthors = () => {
  const URL = "https://thawing-eyrie-26509.herokuapp.com/authors";
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGVtYWRoYXR0ZXI2QGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX05PUk1BTCIsImV4cCI6MTU1NzA1NDAyOX0.7W90BU00KGvMDrjhVvfc5loZMaNhOIDHk3qwSuv-mUELB6a4bk7lEhkwWJaFy-Xo2Zbd3vxRxQoCQTXzYSS8AA', 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 