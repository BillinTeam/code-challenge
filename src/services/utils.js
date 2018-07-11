import axios from 'axios';

/**
 * My idea was to create a BaseService class with doQuery, doMutation and client in its context.
 * So ArticleService and AuthService would extend it. But method inheritation from base class fails in babel
 */

export function graphqlRequest(query, vars = null) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/graphql', {
            query: query,
            variables: vars
        }, { headers: getAuthHeader()})
        .then(response => resolve(response.data.data))
        .catch(error => reject(error));
    });
}


export function getAuthHeader() {
    let auth = localStorage.getItem('auth');
    if (auth === null) {
        return {};
        
    }
    auth = JSON.parse(auth);
    
    return { 'Authorization': "bearer " + auth.token };
}
