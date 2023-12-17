import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/data/comments';

export const create = async (postId, comment, ownerEmail) => {
    const newComment = await request.post(BASE_URL, {
        postId,
        comment,
        owner: ownerEmail
    });

    return newComment;
};

export const getAll = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`
    });

    const result = await request.get(`${BASE_URL}?${query}`);

    return result;
};