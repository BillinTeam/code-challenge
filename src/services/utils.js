import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

/**
 * My idea was to create a BaseService class with doQuery, doMutation and client in its context.
 * So ArticleService and AuthService would extend it. But method inheritation from base class fails in babel
 */

const client = new Lokka({
    transport: new Transport('http://localhost:4000/graphql')
});

export function doQuery(query, vars = null) {
    return new Promise((resolve, reject) => {
        return client.query(query, vars)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}
export function doMutation(query, vars = null) {
    return new Promise((resolve, reject) => {
        return client.mutate(query, vars)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

