import axios from 'axios';
import Config from '../../config';
import { getAuthHeader } from '../utils';
class AuthService {

  login(credentials) {
      return axios.post(Config.BACKEND_URL + 'login', { credentials }, { headers: getAuthHeader() })
        .then(response => response.data)
        .catch(error => error.repsonse.data);
  }
  logout() {
    
      axios.get(Config.BACKEND_URL + 'logout', { headers: getAuthHeader() })
        .then(response => response.data)
        .catch(error => error.repsonse.data);
    
  }
}


export default AuthService;