import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/data/posts';

export const create = async (postData) => {
    const result = await request.post(BASE_URL, postData);

    return result;
}

export const getLastThreePosts = async () => {
    const query = encodeURIComponent('offset=0&pageSize=3');

    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&${query}`);

    return result;
};

export const getOne = async (postId) => {
    const result = await request.get(`${BASE_URL}/${postId}`);

    return result;
};

export const remove = (postId) => request.remove(`${BASE_URL}/${postId}`);

export const getAll = async () => {
    const query = encodeURIComponent('?offset=10&pageSize=5');

    const result = await request.get(BASE_URL);

    return result;
};

export const edit = async (postId, postData) => {
    const result = await request.put(`${BASE_URL}/${postId}`, postData);

    return result;
};
