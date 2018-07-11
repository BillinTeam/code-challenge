import axios from 'axios';
import Config from '../../config';
import { getAuthHeader } from '../utils';
class AuthService {

  login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post(Config.BACKEND_URL + 'login', { credentials }, { headers: getAuthHeader() })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
  logout() {
    return new Promise((resolve, reject) => {
      axios.get(Config.BACKEND_URL + 'logout', { headers: getAuthHeader() })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
}


export default AuthService;