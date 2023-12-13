import * as request from '../lib/request';

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => request.post(`${BASE_URL}/login`, {
    email,
    password
});

export const register = async (email, password) => request.post(`${BASE_URL}/register`, {
    email,
    password
});

export const logout = () => request.get(`${BASE_URL}/logout`);