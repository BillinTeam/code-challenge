export * from './article.actions';
export * from './auth.actions';

export function isApiRequest(action) {
    return /^API_((\w|_)*)_REQUEST$/.test(action);
}

export function isApiSuccess(action) {
    return /^API_((\w|_)*)_SUCCESS$/.test(action);
}
export function isApiFailure(action) {
    return /^API_((\w|_)*)_FAILURE$/.test(action);
}