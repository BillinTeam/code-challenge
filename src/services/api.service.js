import axios from 'axios';

export default class {
  static post(query) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:4000/graphql', { query })
        .then(response => resolve(response.data), 1500)
        .catch(error => reject(error));
    });
  }
  
}