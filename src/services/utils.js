import axios from 'axios';
import Config from '../config';
/**
 * My idea was to create a BaseService class with doQuery, doMutation and client in its context.
 * So ArticleService and AuthService would extend it. But method inheritation from base class fails in babel
 */

export function graphqlRequest(query, vars = null) {
    
    return axios.post(Config.BACKEND_URL+'graphql', {
            query: query,
            variables: vars
        }, { headers: getAuthHeader()})
        .then(response => response.data.data)
        .catch(error => error.response.data);

}


export function getAuthHeader() {
    let auth = localStorage.getItem('auth');
    if (auth === null) {
        return {};
        
    }
    auth = JSON.parse(auth);
    
    return { 'Authorization': "bearer " + auth.token };
}
