import { StoreGlobal } from '../../App';

export const getUserInfo = (name) => {
  let username = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/Puffle5`;
  return fetch(URL)
          .then((res) => res.json());
};
export const getAuthors = () => {
  const token = StoreGlobal({
    type:'get', 
    key:'token'
  });
  const URL = "https://thawing-eyrie-26509.herokuapp.com/authors";
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 

export const getWorksByAuthorID = (authorID) => {
  const token = StoreGlobal({
    type:'get', 
    key:'token'
  });
  const URL = `https://thawing-eyrie-26509.herokuapp.com/authors/${authorID}/works`;
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 

export const getMotifsByAuthorID = (authorID) => {
  const token = StoreGlobal({
    type:'get', 
    key:'token'
  });
  const URL = `https://thawing-eyrie-26509.herokuapp.com/authors/${authorID}/motifs`;
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 
export const getAllBiographyTests = () => {
  const token = StoreGlobal({
    type:'get', 
    key:'token'
  });
  const URL = `https://thawing-eyrie-26509.herokuapp.com/author/biography-quiz`;
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 

export const getBiographyQuestionsByQuizID = (biographyQuizID) => {
  const token = StoreGlobal({
    type:'get', 
    key:'token'
  });
  const URL = `https://thawing-eyrie-26509.herokuapp.com/author/biography-quiz/${biographyQuizID}/question`;
  return fetch(URL, { 
    method: 'get', 
    headers: new Headers({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    })
  }).then((res) => res.json());
}; 