import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/data/posts';

export const create = async (postData) => {
    const result = await request.post(BASE_URL, postData);

    return result;
}